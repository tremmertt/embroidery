import uuid
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.db import models 
 
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


class Sample(models.Model):

    class Meta:
        verbose_name_plural = 'Sample'

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, blank=True)
    image = models.ImageField(upload_to="static/sample/")
    height = models.FloatField("Height", default=0, blank=True)
    width = models.FloatField("Width", default=0, blank=True)
    length = models.FloatField("Length", default=0, blank=True)
    output_format = models.CharField(
        max_length=50, choices=OutputFormat.choices, default=OutputFormat.PNG
    ) 

    def __str__(self):
        return "{}".format(self.name)
