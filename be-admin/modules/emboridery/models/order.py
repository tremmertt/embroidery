import uuid
import django

from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models import JSONField
from django.contrib.auth.models import User

from modules.emboridery.models.customer import Customer


class OrderStatus(models.TextChoices):
    OPEN = "open", _("OPEN")
    IN_PROGRESS = "in_progress", _("IN_PROGRESS")
    PENDING = "pending", _("PEDNING")
    RESOLVED = "resolve", _("RESOLVE")
    CANCEL = "cancel", _("CANCEL")


class Order(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, default="")
    status = models.CharField(
        max_length=50, choices=OrderStatus.choices, default=OrderStatus.OPEN
    )
    start_time = models.DateTimeField("Start", auto_now=False, blank=True)
    end_time = models.DateTimeField("End", auto_now=False, blank=True)
    customer = models.ForeignKey(
        Customer, blank=True, null=True, on_delete=models.CASCADE
    )
    assignee = models.ForeignKey(User, blank=True, null=True, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.name)
