# Generated by Django 3.2.15 on 2022-10-07 14:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('emboridery', '0013_auto_20221007_1356'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='invoiceitem',
            name='sub_total',
        ),
    ]