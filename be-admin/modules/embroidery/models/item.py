import uuid
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.db import models
from modules.embroidery.models.order import Order


class ItemStatus(models.TextChoices):
    OPEN = "open", _("OPEN")
    IN_PROGRESS = "in_progress", _("IN_PROGRESS")
    RESOLVED = "resolve", _("RESOLVE")


class OutputFormat(models.TextChoices):
    JPEG = "JPEG", _("JPEG")
    JPG = "JPG", _("JPG")
    PNG = "PNG", _("PNG")
    PDF = "PDF", _("PDF")
    DST = "DST", _("DST")
    EMB = "EMB", _("EMB")
    PES = "PES", _("PES")
    CND = "CND", _("CND")
    EXP = "EXP", _("EXP")
    VP3 = "VP3", _("VP3")
    JEF = "JEF", _("JEF")
    HUS = "HUS", _("HUS")
    ART = "ART", _("ART")

class Item(models.Model):

    class Meta:
        verbose_name_plural = 'Product'

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, blank=True)
    image = models.ImageField(upload_to="static/item/", blank=True,null=True)
    height = models.FloatField("Height", default=0, blank=True)
    width = models.FloatField("Width", default=0, blank=True)
    length = models.FloatField("Length", default=0, blank=True)
    output_format = models.CharField(
        max_length=50, choices=OutputFormat.choices, default=OutputFormat.PDF
    )
    status = models.CharField(
        max_length=50, choices=ItemStatus.choices, default=ItemStatus.OPEN
    )
    quantity = models.IntegerField(default=1, blank=True,)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2, default=0,blank=True,)  
    order = models.ForeignKey(Order, blank=True, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.name)

    @property
    def sub_total(self):
        if self.quantity and self.unit_price:
            return self.quantity * self.unit_price
        return 0