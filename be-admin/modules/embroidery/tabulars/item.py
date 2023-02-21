import re

from django.contrib import admin, messages
from django.utils.html import mark_safe
from django import forms
from django.db import models 
from modules.embroidery.models.item import MessageRequest, ProductRequest, FileProductRequest, FileProductResponse
from modules.embroidery.forms.item import ItemInlineForm , ImageInlineForm, FileProductResponseInlineForm
from nested_admin import NestedModelAdmin, NestedStackedInline, NestedTabularInline

class MessageForm(forms.ModelForm): 
    
    class Meta:  
        widgets = {
            "message": forms.TextInput(attrs={"size": "100%"}), 
        }

class MessageTabularInline(NestedTabularInline):
    model = MessageRequest
    extra = 2
    form = MessageForm

from django.contrib.admin.widgets import AdminFileWidget
from django.forms import widgets

class AdminImageWidget(AdminFileWidget):
    def render(self, name, value, attrs=None, renderer=None):
        print('name', name)
        print('value', value)
        output = []
        if value and getattr(value, "url", None):
            image_url = value.url
            file_name = str(value)
            output.append(u' <a href="%s" target="_blank"><img src="%s" alt="%s" width="150" height="150"  style="object-fit: cover;"/></a> %s ' % \
                (image_url, image_url, file_name, _('')))
        output.append(super(AdminFileWidget, self).render(name, value, attrs))
        return mark_safe(u''.join(output))

class ImageProductRequestInline(admin.TabularInline):
    model = FileProductRequest
    form = ImageInlineForm
    extra = 1
 
    list_display_fields = ['preview', ]
    readonly_fields = ["preview", ]

    def preview(self, obj):  
        if obj.image.name: 
            html_images = '<img src="/%s" width="150" height="150" />' % obj.image.name
            return mark_safe(html_images)
        return ""

class FileProductResponseInline(admin.TabularInline):
    model = FileProductResponse
    form = FileProductResponseInlineForm
    extra = 1 

class ItemTabularInline(admin.StackedInline):
    model = ProductRequest
    form = ItemInlineForm
    # inlines = [ColorTabularInline, MessageTabularInline]
    extra = 0
    max_num = 1 

    # fields = [
    #     "images_tag",
    #     # "image",
    #     # "output_format",
    #     "height",
    #     "width",
    #     "unit",
    #     # "list_color",
    #     # "list_comment",
    #     # "status",
    #     "quantity",
    #     "unit_price",
    #     # "image_preview",
    # ]

    # list_display = [
    #     "images_tag",
        # "list_comment",
        # "image_preview",
        # "time",
        # "state",
    # ] 
    readonly_fields = ["images_tag", ]

    def images_tag(self, obj):
        html_images = ""
        print('sa', (obj.images.path))
        # for image in obj.images:
        #     print(len(image))
            # html_images += '<img src="/statis/item/%s" width="150" height="150" />' % image
        return mark_safe(html_images)

    # image_preview.short_description = "Preview"
    # image_preview.allow_tags = True

    # def time(self, obj):
    #     if obj.start_time.date() == obj.start_time.date():
    #         return "{} ~ {} ◉ {}".format(
    #             obj.start_time.time(), obj.end_time.time(), obj.start_time.date()
    #         )
    #     return "{} ~ {}".format(obj.start_time.time(), obj.end_time.time())
 
     