from django.contrib import admin, messages
from django.utils.html import mark_safe

from modules.embroidery.models.item import Item
from modules.embroidery.forms.item import ItemInlineForm 
    
class ItemTabularInline(admin.TabularInline):
    model = Item
    form = ItemInlineForm
    extra = 1
    fields = (
        "name",
        "image",
        "output_format",
        "height",
        "width",
        "length",
        "status",
        "quantity",
        "unit_price",
        "image_preview",
    )

    list_display = [
        "name",
        "image_preview",
        "time",
        "state",
    ]

    readonly_fields = ("image_preview", "time")

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

    def time(self, obj):
        if obj.start_time.date() == obj.start_time.date():
            return "{} ~ {} ◉ {}".format(
                obj.start_time.time(), obj.end_time.time(), obj.start_time.date()
            )
        return "{} ~ {}".format(obj.start_time.time(), obj.end_time.time())

    def state(self, obj):
        icon = '<i class="fa-solid fa-circle-check" style="color: #518bff; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "resolve":
            icon = '<i class="fa-solid fa-circle-check" style="color: green; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "cancel":
            icon = '<i class="fa-solid fa-circle-xmark" style="color: #494949; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "pending":
            icon = '<i class="fa-solid fa-circle-minus" style="color: red; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "in_progress":
            icon = '<i class="fa-regular fa-circle" style="color: orange; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "open":
            icon = '<i class="fa-solid fa-circle" style="color: #518bff; font-size: 18px; text-algin:center;"></i>'
        return mark_safe(icon)

    state.short_description = "Status"
    state.allow_tags = True
