# Generated by Django 3.2.15 on 2022-10-03 13:05

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ("emboridery", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Order",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        unique=True,
                    ),
                ),
                ("name", models.CharField(default="", max_length=256)),
                ("image", models.ImageField(upload_to="orders/")),
                (
                    "height",
                    models.FloatField(blank=True, default=0, verbose_name="Height"),
                ),
                (
                    "width",
                    models.FloatField(blank=True, default=0, verbose_name="Width"),
                ),
                (
                    "length",
                    models.FloatField(blank=True, default=0, verbose_name="Length"),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[
                            ("open", "Open"),
                            ("in progress", "In Progress"),
                            ("pending", "Pending"),
                            ("resolve", "Resolve"),
                            ("close", "Close"),
                        ],
                        default="open",
                        max_length=50,
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
