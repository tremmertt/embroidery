# Generated by Django 4.1.3 on 2022-11-28 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0013_alter_customer_name_alter_customer_password_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customer',
            name='is_confirm',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1669642308', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1669642308', max_length=256),
        ),
    ]
