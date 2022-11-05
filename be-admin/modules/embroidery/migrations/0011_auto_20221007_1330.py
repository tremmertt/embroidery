# Generated by Django 3.2.15 on 2022-10-07 13:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0010_auto_20221007_1327'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='invoice',
            name='order',
        ),
        migrations.AddField(
            model_name='order',
            name='invoice',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='embroidery.invoice'),
        ),
    ]
