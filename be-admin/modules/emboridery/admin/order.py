import datetime
from modules.emboridery.filters.order import FilterByStatus
from modules.emboridery.tabulars.item import ItemTabularInline

from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.emboridery.models.order import Order
from django.utils.html import mark_safe
from django import forms


@admin.register(Order)
class OrderAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = [
        # "id",
        "name",
        "customer",
        "assignee",
        "total_item",
        "time",
        "state",
    ]
    inlines = (ItemTabularInline,)
    # search_fields = ("name", "status")
    list_filter = (FilterByStatus,)

    def total_item(self, obj):
        return len(obj.item_set.all())

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

    class Media:
        css = {"all": ("css/order-list.css",)}

    # def h_w_l(self, obj):
    #     return '{} - {} - {}'.format(str(obj.height), str(obj.width), str(obj.length))
