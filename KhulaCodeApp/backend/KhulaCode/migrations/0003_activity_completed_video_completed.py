from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("KhulaCode", "0002_lesson_content_models"),
    ]

    operations = [
        migrations.AddField(
            model_name="activity",
            name="completed",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="video",
            name="completed",
            field=models.BooleanField(default=False),
        ),
    ]
