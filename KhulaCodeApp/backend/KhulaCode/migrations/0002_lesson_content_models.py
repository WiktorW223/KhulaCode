import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("KhulaCode", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Lesson",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("description", models.CharField(max_length=500)),
                ("completed", models.BooleanField(default=False)),
                ("title", models.CharField(max_length=100)),
                ("unit", models.IntegerField(default=0)),
                ("number", models.IntegerField(default=0)),
            ],
            options={
                "ordering": ["unit", "number", "id"],
            },
        ),
        migrations.CreateModel(
            name="Activity",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(blank=True, default="", max_length=100)),
                ("question", models.CharField(max_length=500)),
                ("order", models.IntegerField(default=0)),
                ("lesson", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="activities", to="KhulaCode.lesson")),
            ],
        ),
        migrations.CreateModel(
            name="Video",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(blank=True, default="", max_length=100)),
                ("video_url", models.CharField(max_length=500)),
                ("order", models.IntegerField(default=0)),
                ("lesson", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="videos", to="KhulaCode.lesson")),
            ],
        ),
        migrations.CreateModel(
            name="Choice",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("text", models.CharField(max_length=500)),
                ("order", models.IntegerField(default=0)),
                ("is_correct", models.BooleanField(default=False)),
                ("activity", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="choices", to="KhulaCode.activity")),
            ],
        ),
    ]
