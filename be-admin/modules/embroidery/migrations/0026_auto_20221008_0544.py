# Generated by Django 3.2.15 on 2022-10-08 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0025_auto_20221008_0543'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='email',
            field=models.EmailField(blank=True, max_length=70),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1665207872', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1665207872', max_length=256),
        ),
    ]