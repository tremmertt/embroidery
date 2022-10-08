import uuid
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.db import models 

class Sample(models.Model):

    class Meta:
        verbose_name_plural = 'Sample'

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256)
    image = models.ImageField(upload_to="static/sample/")
    height = models.FloatField("Height", default=0, blank=True)
    width = models.FloatField("Width", default=0, blank=True)
    length = models.FloatField("Length", default=0, blank=True)
    
    def __str__(self):
        return "{}".format(self.name)
