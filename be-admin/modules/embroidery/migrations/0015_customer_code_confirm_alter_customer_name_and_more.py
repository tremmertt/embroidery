# Generated by Django 4.1.3 on 2022-11-28 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0014_customer_is_confirm_alter_customer_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='code_confirm',
            field=models.CharField(blank=True, default='', max_length=15),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1669643823', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1669643823', max_length=256),
        ),
    ]