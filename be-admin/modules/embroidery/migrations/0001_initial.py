# Generated by Django 3.2.15 on 2022-11-16 15:51

from django.conf import settings
import django.contrib.postgres.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AccountLogin',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('list_account', django.contrib.postgres.fields.ArrayField(base_field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=10), blank=True, size=10), default=list, size=100)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='BlacklistToken',
            fields=[
                ('id', models.IntegerField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('token', models.CharField(max_length=500, unique=True)),
                ('blacklisted_on', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(default='Customer 1668613864', max_length=256)),
                ('email', models.EmailField(blank=True, max_length=70)),
                ('address', models.CharField(blank=True, max_length=256)),
                ('phone_number', models.CharField(blank=True, max_length=17, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.", regex='^\\+?1?\\d{9,15}$')])),
                ('customer_type', models.CharField(choices=[('individual', 'INDIVIDUAL'), ('organization', 'ORGANIZATION')], default='individual', max_length=50)),
                ('login_type', models.CharField(choices=[('normal', 'NORMAL'), ('google', 'GOOGLE'), ('facebook', 'FACEBOOK')], default='google', max_length=50)),
                ('company', models.CharField(blank=True, default='', max_length=256)),
                ('meta_data', models.JSONField(default=dict, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name_plural': 'Customer',
            },
        ),
        migrations.CreateModel(
            name='Sample',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(max_length=256)),
                ('image', models.ImageField(upload_to='static/sample/')),
                ('height', models.FloatField(blank=True, default=0, verbose_name='Height')),
                ('width', models.FloatField(blank=True, default=0, verbose_name='Width')),
                ('length', models.FloatField(blank=True, default=0, verbose_name='Length')),
            ],
            options={
                'verbose_name_plural': 'Sample',
            },
        ),
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(blank=True, max_length=256)),
                ('address', models.CharField(blank=True, max_length=256)),
                ('agency', models.CharField(blank=True, max_length=256)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(default='Order 1668613864', max_length=256)),
                ('status', models.CharField(choices=[('open', 'OPEN'), ('in_progress', 'IN_PROGRESS'), ('pending', 'PEDNING'), ('resolve', 'RESOLVE'), ('cancel', 'CANCEL')], default='open', max_length=50)),
                ('start_time', models.DateTimeField(blank=True, null=True, verbose_name='Start')),
                ('end_time', models.DateTimeField(blank=True, null=True, verbose_name='End')),
                ('invoice_status', models.CharField(choices=[('init', 'INIT'), ('paid', 'PAID'), ('debt', 'DEBT')], default='init', max_length=50)),
                ('payment_method', models.CharField(choices=[('momo', 'MOMO'), ('card', 'CARD'), ('transfer', 'TRANSFER'), ('manual', 'MANUAL')], default='card', max_length=50)),
                ('receipt_pdf', models.FileField(blank=True, null=True, upload_to='static/receipt/pdf/')),
                ('meta_data', models.TextField(blank=True, default='', verbose_name='Note')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('assignee', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('customer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='embroidery.customer')),
            ],
            options={
                'verbose_name_plural': 'Order',
            },
        ),
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('name', models.CharField(blank=True, max_length=256)),
                ('image', models.ImageField(blank=True, null=True, upload_to='static/item/')),
                ('height', models.FloatField(blank=True, default=0, verbose_name='Height')),
                ('width', models.FloatField(blank=True, default=0, verbose_name='Width')),
                ('length', models.FloatField(blank=True, default=0, verbose_name='Length')),
                ('output_format', models.CharField(choices=[('JPEG', 'JPEG'), ('JPG', 'JPG'), ('PNG', 'PNG'), ('PDF', 'PDF'), ('DST', 'DST'), ('EMB', 'EMB'), ('PES', 'PES'), ('CND', 'CND'), ('EXP', 'EXP'), ('VP3', 'VP3'), ('JEF', 'JEF'), ('HUS', 'HUS'), ('ART', 'ART')], default='PDF', max_length=50)),
                ('status', models.CharField(choices=[('open', 'OPEN'), ('in_progress', 'IN_PROGRESS'), ('resolve', 'RESOLVE')], default='open', max_length=50)),
                ('quantity', models.IntegerField(blank=True, default=1)),
                ('unit_price', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10)),
                ('order', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='embroidery.order')),
            ],
            options={
                'verbose_name_plural': 'Product',
            },
        ),
    ]
