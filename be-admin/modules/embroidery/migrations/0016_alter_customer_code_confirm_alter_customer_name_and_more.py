# Generated by Django 4.1.3 on 2022-11-28 14:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0015_customer_code_confirm_alter_customer_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='code_confirm',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1669644996', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1669644996', max_length=256),
        ),
    ]
