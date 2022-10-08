# Generated by Django 3.2.15 on 2022-10-07 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emboridery', '0012_invoiceitem'),
    ]

    operations = [
        migrations.RenameField(
            model_name='invoiceitem',
            old_name='total',
            new_name='sub_total',
        ),
        migrations.AddField(
            model_name='invoice',
            name='total',
            field=models.DecimalField(decimal_places=2, default=2022, max_digits=6),
            preserve_default=False,
        ),
    ]