import uuid
import django

from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField


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


class Customer(models.Model):

    class Meta:
        verbose_name_plural = 'Customer'
        
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, blank=True)
    email = models.EmailField(max_length=70, blank=True, unique=True)
    address = models.CharField(max_length=256, blank=True)
    agency = models.CharField(max_length=256, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.name, self.email)
