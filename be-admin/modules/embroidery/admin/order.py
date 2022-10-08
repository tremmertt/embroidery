import datetime
from modules.embroidery.filters.order import FilterByStatus
from modules.embroidery.tabulars.item import ItemTabularInline

from gettext import ngettext 
from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.embroidery.models.order import Order
from modules.embroidery.models.item import Item
from django.utils.html import mark_safe
from django import forms



def export_selected_objects(message_user, request, queryset):

    list_id = []
    for query in queryset:  
        list_id.append(str(query.id))
     
    url = f'/embroidery/order/pdf/{list_id[0]}' 
    message_user(request, ngettext(
        '%d receipt download successfully.',
        '%d receipts sent successfully.',
        len(queryset),
    ) % len(queryset), messages.SUCCESS) 
    from django.http import HttpResponse, HttpResponseRedirect
    from django.shortcuts import redirect
    from django.urls import reverse 
    from django.shortcuts import render
    return render(request, url) 


@admin.register(Order)
class OrderAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    
    list_display = [
        # "id",
        "name",
        "customer",
        "assignee",
        "total_item",
        "start_time",
        "end_time",
        "total_price",
        "state",
        "download_receipt"
    ]
    fields = [ 
        "name",
        "status",
        "customer",
        "assignee", 
        "start_time",
        "end_time",
        "invoice_status",
        "payment_method",
        "meta_data",
        "total_price", 
    ] 

    inlines = (ItemTabularInline, )
    # search_fields = ("name", "status")
    list_filter = (FilterByStatus,)
    readonly_fields = ['total_price', 'state', 'total_item']

    def download_receipt(self, obj): 
        return mark_safe(
            '<a href="/embroidery/order/pdf/{}" target="_blank" style="width:80px; height:80px;margin: auto !important;padding: auto;" >Download</a>'.format(
                obj.id
            )
        ) 
    download_receipt.short_description = "Receipt"
    
    def total_price(self, obj): 
        list_item = obj.item_set.all()

        if list_item and len(list_item) != 0:
            total = 0
            for item in list_item:
                total += item.quantity * item.unit_price
            return total
        return "-"
    

    def total_item(self, obj):
        return len(obj.item_set.all())
 
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
