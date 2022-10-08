# Generated by Django 3.2.15 on 2022-10-08 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0031_auto_20221008_1509'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='receipt_pdf',
            field=models.FileField(blank=True, null=True, upload_to='static/receipt/pdf/'),
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1665243075', max_length=256),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1665243075', max_length=256),
        ),
    ]
