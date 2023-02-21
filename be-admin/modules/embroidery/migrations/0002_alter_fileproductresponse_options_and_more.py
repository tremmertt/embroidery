# Generated by Django 4.1.3 on 2023-02-20 16:03

from django.db import migrations, models
import modules.embroidery.models.item


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='fileproductresponse',
            options={'verbose_name': 'File output', 'verbose_name_plural': 'File output'},
        ),
        migrations.AlterField(
            model_name='customer',
            name='name',
            field=models.CharField(default='Customer 1676908997', max_length=256),
        ),
        migrations.AlterField(
            model_name='fileproductrequest',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=modules.embroidery.models.item.get_file_path, verbose_name='Hình ảnh'),
        ),
        migrations.AlterField(
            model_name='fileproductresponse',
            name='efile',
            field=models.FileField(blank=True, null=True, upload_to=modules.embroidery.models.item.get_file_path, verbose_name='File output'),
        ),
        migrations.AlterField(
            model_name='order',
            name='name',
            field=models.CharField(default='Order 1676908997', max_length=256, verbose_name='Tên'),
        ),
    ]