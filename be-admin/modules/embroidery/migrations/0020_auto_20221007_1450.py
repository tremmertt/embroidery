# Generated by Django 3.2.15 on 2022-10-07 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('embroidery', '0019_auto_20221007_1442'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='invoice',
        ),
        migrations.AddField(
            model_name='order',
            name='meta_data',
            field=models.JSONField(blank=True, default=dict),
        ),
        migrations.AddField(
            model_name='order',
            name='payment_method',
            field=models.CharField(choices=[('momo', 'MOMO'), ('card', 'CARD'), ('transfer', 'TRANSFER'), ('manual', 'MANUAL')], default='card', max_length=50),
        ),
        migrations.AlterField(
            model_name='order',
            name='end_time',
            field=models.DateTimeField(blank=True, null=True, verbose_name='End'),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('init', 'INIT'), ('paid', 'PAID'), ('debt', 'DEBT')], default='init', max_length=50),
        ),
        migrations.DeleteModel(
            name='Invoice',
        ),
    ]
