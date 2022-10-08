import uuid
import django

from gettext import ngettext
from django.contrib import admin, messages
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models import JSONField
from django.contrib.auth.models import User

from modules.embroidery.models.customer import Customer 

class OrderStatus(models.TextChoices):
    OPEN = "open", _("OPEN")
    IN_PROGRESS = "in_progress", _("IN_PROGRESS")
    PENDING = "pending", _("PEDNING")
    RESOLVED = "resolve", _("RESOLVE")
    CANCEL = "cancel", _("CANCEL")

class InvoiceStatus(models.TextChoices):
    INIT = "init", _("INIT")
    PAID = "paid", _("PAID")
    DEBT = "debt", _("DEBT")

class PaymentMethod(models.TextChoices):
    MOMO = "momo", _("MOMO")
    CARD = "card", _("CARD")
    TRANSFER = "transfer", _("TRANSFER")
    MANUAL = "manual", _("MANUAL")

class Order(models.Model):

    class Meta:
        verbose_name_plural = 'Order'

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, default="Order {}".format(str(datetime.timestamp(datetime.now())).split('.')[0]))
    status = models.CharField(
        max_length=50, choices=OrderStatus.choices, default=OrderStatus.OPEN
    )
    start_time = models.DateTimeField("Start", default=datetime.now, blank=True, null=True)
    end_time = models.DateTimeField("End", blank=True, null=True)
    customer = models.ForeignKey(
        Customer, blank=True, null=True, on_delete=models.CASCADE
    )
    assignee = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE) 
    invoice_status = models.CharField(
        max_length=50, choices=InvoiceStatus.choices, default=InvoiceStatus.INIT
    )
    payment_method = models.CharField(
        max_length=50, choices=PaymentMethod.choices, default=PaymentMethod.CARD
    )
    meta_data = JSONField("Note",default=dict, blank=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if self.customer: 
            return "{} - {}".format(self.name, self.customer.name)
        return "{}".format(self.name)