import uuid
import django

from datetime import datetime
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from django.core.validators import RegexValidator

class AccountLogin(models.Model):
    
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    list_account = ArrayField(
        ArrayField(
            models.CharField(max_length=10, blank=True),
            size=10,
            blank=True,
        ),
        size=100,
        default=list,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.name, self.agency)

class CustomerType(models.TextChoices): 
    INDIVIDUAL = "individual", _("INDIVIDUAL")
    ORGANIZATION = "organization", _("ORGANIZATION") 

class Customer(models.Model):

    class Meta:
        verbose_name_plural = 'Customer'
        
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, default="Customer {}".format(str(datetime.timestamp(datetime.now())).split('.')[0]))
    email = models.EmailField(max_length=70, blank=True, unique=False)
    address = models.CharField(max_length=256, blank=True) 
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True) # Validators should be a list
    customer_type = models.CharField(max_length=50, choices=CustomerType.choices, default=CustomerType.INDIVIDUAL)
    company = models.CharField(max_length=256, blank=True, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if self.phone_number:
            return "{} - {}".format(self.name, self.phone_number)
        if self.email:
            return "{} - {}".format(self.name, self.email)
        return self.name
