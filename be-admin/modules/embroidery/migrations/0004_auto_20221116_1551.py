# Generated by Django 3.2.15 on 2022-11-16 15:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0003_auto_20221116_1551'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1668613875', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1668613875', max_length=256),
        ),
    ]
