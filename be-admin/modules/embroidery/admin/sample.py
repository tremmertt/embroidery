import datetime 
from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.embroidery.models.sample import Sample
from django.utils.html import mark_safe
from django import forms

@admin.register(Sample)
class SampleAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    fields = (
        "name",
        "image", 
        "height",
        "width",
        "length", 
        "image_preview",
    )

    list_display = [
        "name", 
        "image_preview",
        "image",
        "height",
        "width",
        "length",  
    ]

    readonly_fields = ("image_preview", )

    def image_preview(self, obj):
        if obj.image:
            return mark_safe(
                '<img src="/{}" style="width:80px; height:80px;margin: auto !important;padding: auto;" />'.format(
                    obj.image
                )
            )
        return ""

    image_preview.short_description = "Preview"
    image_preview.allow_tags = True
 