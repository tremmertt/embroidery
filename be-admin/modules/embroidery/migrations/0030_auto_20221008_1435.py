# Generated by Django 3.2.15 on 2022-10-08 14:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0029_auto_20221008_1409'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1665239751', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1665239751', max_length=256),
        ),
    ]
