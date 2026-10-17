"""
Management command to import Grade 3 students (excluding class 3C) from the
Masonwabe attendance register spreadsheet, create User + Profile accounts for
them, and write an output spreadsheet mapping usernames to students.

Usage (from KhulaCodeApp/backend/):

    # Preview what would be created — nothing is saved:
    python manage.py import_students --dry-run

    # Actually create the accounts (against whichever DB DATABASE_URL points at):
    python manage.py import_students

    # Custom input/output paths:
    python manage.py import_students --file "/path/to/register.xlsx" --out "/path/to/output.xlsx"

Behaviour:
    * Reads the "Register" sheet, locating the CEMIS NO / NAME / GRADE / CLASS
      columns from the header row.
    * Keeps rows where GRADE is Grade 3 (GR3) and CLASS is NOT 3C.
    * Usernames are mas001, mas002, ... continuing after any existing masXXX
      users in the database. Password for all accounts is "mas67".
    * Names like "SURNAME, FIRSTNAME MIDDLE" are split into
      first_name="Firstname Middle" and last_name="Surname" (title-cased).
    * Each user gets a Profile linked to the "Masonwabe Primary School" School
      record (created if missing), is_teacher=False.
    * Writes an .xlsx with columns: Username, Password, Full Name, Grade,
      Class, CEMIS NO.

IMPORTANT: This command writes to whichever database Django is configured
with. To target the production Postgres DB, set the DATABASE_URL environment
variable before running, e.g.:

    export DATABASE_URL="postgres://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require"
    python manage.py import_students --dry-run

The command prints which database it is connected to and, unless --dry-run or
--no-input is given, asks for confirmation before creating anything.
"""
import os
import re

from django.conf import settings
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction

from KhulaCode.models import Profile, School

DEFAULT_INPUT = os.path.expanduser("~/Downloads/Masonwabe All students.xlsx")
DEFAULT_OUTPUT = os.path.expanduser("~/Downloads/masonwabe_grade3_accounts.xlsx")
SCHOOL_NAME = "Masonwabe Primary School"
USERNAME_PREFIX = "mas"
PASSWORD = "mas67"


def normalize_class(value):
    """Normalize messy CLASS cell values like 'A', 'GR3B', '3C', 'VE' -> 'A', 'B', 'C', 'VE'."""
    v = (value or "").strip().upper()
    if not v:
        return ""
    # Strip leading GR3 / GRADE 3 / 3 prefixes: "GR3B" -> "B", "3C" -> "C", "GRADE 3A" -> "A"
    # Apply repeatedly to handle doubled prefixes like "GR3 GR3B".
    prev = None
    while prev != v:
        prev = v
        v = re.sub(r"^(GRADE\s*3|GR\s*3|3)\s*", "", v).strip()
    return v


def split_name(raw_name):
    """'SURNAME, FIRSTNAME MIDDLE' -> ('Firstname Middle', 'Surname')."""
    raw_name = (raw_name or "").strip()
    if "," in raw_name:
        last, first = raw_name.split(",", 1)
        return first.strip().title(), last.strip().title()
    # Fallback: last word is the surname
    parts = raw_name.split()
    if len(parts) >= 2:
        return " ".join(parts[:-1]).title(), parts[-1].title()
    return raw_name.title(), ""


class Command(BaseCommand):
    help = (
        "Create student accounts (username masXXX, password mas67) for Grade 3 "
        "learners not in class 3C, from the Masonwabe register spreadsheet, and "
        "write an output spreadsheet mapping usernames to students."
    )

    def add_arguments(self, parser):
        parser.add_argument(
            "--file",
            default=DEFAULT_INPUT,
            help=f"Path to the input .xlsx register (default: {DEFAULT_INPUT})",
        )
        parser.add_argument(
            "--out",
            default=DEFAULT_OUTPUT,
            help=f"Path for the output .xlsx mapping (default: {DEFAULT_OUTPUT})",
        )
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Preview which accounts would be created without saving anything.",
        )
        parser.add_argument(
            "--no-input",
            action="store_true",
            help="Do not ask for confirmation before writing to the database.",
        )

    # ------------------------------------------------------------------ #
    def handle(self, *args, **options):
        try:
            import openpyxl
        except ImportError:
            raise CommandError("openpyxl is not installed. Run: pip install openpyxl")

        input_path = options["file"]
        output_path = options["out"]
        dry_run = options["dry_run"]

        if not os.path.exists(input_path):
            raise CommandError(f"Input spreadsheet not found: {input_path}")

        # ---- Show which DB we're pointed at, and confirm ---------------- #
        db = settings.DATABASES["default"]
        engine = db["ENGINE"].rsplit(".", 1)[-1]
        db_desc = f"{engine} ({db.get('HOST') or db.get('NAME')})"
        self.stdout.write(self.style.WARNING(f"Target database: {db_desc}"))
        if "sqlite" in engine and not dry_run:
            self.stdout.write(
                self.style.WARNING(
                    "WARNING: You are pointed at the local SQLite database. "
                    "To target Postgres, set the DATABASE_URL environment variable first."
                )
            )
        if not dry_run and not options["no_input"]:
            answer = input("Proceed with creating accounts in this database? [y/N] ")
            if answer.strip().lower() not in ("y", "yes"):
                self.stdout.write("Aborted.")
                return

        # ---- Read spreadsheet ------------------------------------------- #
        wb = openpyxl.load_workbook(input_path, read_only=True, data_only=True)
        ws = wb["Register"] if "Register" in wb.sheetnames else wb[wb.sheetnames[0]]

        header_map = None  # column name -> index
        students = []
        seen = set()  # (name, cemis) de-dup within the file

        for row in ws.iter_rows(values_only=True):
            cells = [str(c).strip() if c is not None else "" for c in row]
            upper = [c.upper() for c in cells]

            # Locate the header row (contains NAME, GRADE and CLASS)
            if "NAME" in upper and "GRADE" in upper and "CLASS" in upper:
                header_map = {
                    "cemis": upper.index("CEMIS NO") if "CEMIS NO" in upper else None,
                    "name": upper.index("NAME"),
                    "grade": upper.index("GRADE"),
                    "class": upper.index("CLASS"),
                }
                continue

            if header_map is None:
                continue

            name = cells[header_map["name"]]
            grade = cells[header_map["grade"]].upper()
            klass = cells[header_map["class"]]
            cemis = (
                cells[header_map["cemis"]] if header_map["cemis"] is not None else ""
            )

            if not name or not grade:
                continue

            # Grade 3 only
            if not re.fullmatch(r"(GR|GRADE)\s*3", grade):
                continue

            # Exclude class 3C
            norm_class = normalize_class(klass)
            if norm_class == "C":
                continue

            key = (name.upper(), cemis)
            if key in seen:
                continue
            seen.add(key)

            students.append(
                {"name": name, "grade": "3", "class": norm_class or klass, "cemis": cemis}
            )

        wb.close()

        if not students:
            raise CommandError(
                "No matching students found (Grade 3, not in class 3C). "
                "Check the spreadsheet format."
            )

        self.stdout.write(
            f"Found {len(students)} Grade 3 students not in class 3C."
        )

        # ---- Work out the next available masXXX number ------------------ #
        next_num = 1
        existing = User.objects.filter(
            username__regex=rf"^{USERNAME_PREFIX}\d+$"
        ).values_list("username", flat=True)
        nums = [int(u[len(USERNAME_PREFIX):]) for u in existing]
        if nums:
            next_num = max(nums) + 1

        # ---- Create accounts -------------------------------------------- #
        school = None
        created_rows = []

        with transaction.atomic():
            if not dry_run:
                school, _ = School.objects.get_or_create(name=SCHOOL_NAME)

            for student in students:
                username = f"{USERNAME_PREFIX}{next_num:03d}"
                next_num += 1
                first_name, last_name = split_name(student["name"])

                if not dry_run:
                    user = User.objects.create_user(
                        username=username,
                        password=PASSWORD,
                        first_name=first_name,
                        last_name=last_name,
                    )
                    Profile.objects.create(
                        user=user, school=school, is_teacher=False
                    )

                created_rows.append(
                    [
                        username,
                        PASSWORD,
                        student["name"],
                        student["grade"],
                        student["class"],
                        student["cemis"],
                    ]
                )
                self.stdout.write(
                    f"  {username}  ->  {student['name']}  (class {student['class'] or '?'})"
                )

        # ---- Write the output spreadsheet -------------------------------- #
        out_wb = openpyxl.Workbook()
        out_ws = out_wb.active
        out_ws.title = "Accounts"
        out_ws.append(["Username", "Password", "Full Name", "Grade", "Class", "CEMIS NO"])
        for row in created_rows:
            out_ws.append(row)
        # Reasonable column widths
        for col, width in zip("ABCDEF", (12, 12, 42, 8, 10, 18)):
            out_ws.column_dimensions[col].width = width
        out_wb.save(output_path)

        action = "Would create" if dry_run else "Created"
        self.stdout.write(
            self.style.SUCCESS(
                f"{action} {len(created_rows)} account(s). "
                f"Mapping spreadsheet written to: {output_path}"
            )
        )
        if dry_run:
            self.stdout.write(
                "Dry run only — no accounts were created. "
                "Re-run without --dry-run to create them."
            )
