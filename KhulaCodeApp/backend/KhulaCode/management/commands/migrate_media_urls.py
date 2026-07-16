"""
Management command to rewrite Video.video_url values that point at the
local Django dev server (http://127.0.0.1:8000/media/...) so that they
point at Azure Blob Storage instead.

Usage:
    python manage.py migrate_media_urls
    python manage.py migrate_media_urls --dry-run

The new base URL is read from the MEDIA_BASE_URL setting (which in turn
reads from the MEDIA_BASE_URL environment variable). On Azure this should
be set to:

    https://khulacode.blob.core.windows.net/khulacode-media

Note: the Profile picture ("pfp") and progress "area" badge image URLs are
hardcoded string literals inside KhulaCode/serializers.py (not stored in
the database), so they are NOT touched by this command. Those are updated
in code directly to build from settings.MEDIA_BASE_URL.
"""
from django.conf import settings
from django.core.management.base import BaseCommand

from KhulaCode.models import Video

OLD_PREFIXES = [
    "http://127.0.0.1:8000/media",
    "http://localhost:8000/media",
]


class Command(BaseCommand):
    help = "Rewrite Video.video_url values from the local dev media host to the configured MEDIA_BASE_URL (e.g. Azure Blob Storage)."

    def add_arguments(self, parser):
        parser.add_argument(
            "--dry-run",
            action="store_true",
            help="Show what would change without saving anything.",
        )

    def handle(self, *args, **options):
        dry_run = options["dry_run"]
        new_base = settings.MEDIA_BASE_URL.rstrip("/")

        updated = 0
        skipped = 0

        for video in Video.objects.all():
            old_url = video.video_url or ""
            matched_prefix = next(
                (p for p in OLD_PREFIXES if old_url.startswith(p)), None
            )
            if not matched_prefix:
                skipped += 1
                continue

            new_url = new_base + old_url[len(matched_prefix):]

            self.stdout.write(f"Video #{video.pk}: {old_url!r} -> {new_url!r}")

            if not dry_run:
                video.video_url = new_url
                video.save(update_fields=["video_url"])

            updated += 1

        action = "Would update" if dry_run else "Updated"
        self.stdout.write(
            self.style.SUCCESS(
                f"{action} {updated} video(s). Skipped {skipped} (already correct or empty)."
            )
        )
