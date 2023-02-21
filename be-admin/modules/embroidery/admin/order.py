import datetime
from modules.embroidery.filters.order import FilterByStatus
from modules.embroidery.models.item import MessageRequest, ProductRequest, FileProductRequest
from modules.embroidery.tabulars.item import ItemTabularInline, MessageTabularInline, ImageProductRequestInline, FileProductResponseInline

from django.forms import TextInput, Textarea
from gettext import ngettext 
from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.embroidery.models.order import Order
from modules.embroidery.models.item import ProductRequest
from django.utils.html import mark_safe
from django import forms
from django.db import models


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
        "ref",
        "name",
        "output_type",
        "payment_method",
        "state",
        # "list_comment",
        "price",
        "date",  
        "request_type",
        # "download_receipt"
    ]
    # fields = [ 
    #     "name",
    #     "status",
    #     # "customer",
    #     # "assignee",  
    #     "status",
    #     "payment_method", 
    # ] 

    inlines = (
        ItemTabularInline,
        ImageProductRequestInline,
        FileProductResponseInline,
    )
    # # search_fields = ("name", "status")
    list_filter = (FilterByStatus,)
    # readonly_fields = ['price', 'state', 'total_item']

    # def download_receipt(self, obj): 
    #     return mark_safe(
    #         '<a href="/embroidery/order/pdf/{}" target="_blank" style="width:80px; height:80px;margin: auto !important;padding: auto;" >Download</a>'.format(
    #             obj.id
    #         )
    #     ) 
    # download_receipt.short_description = "Receipt"
    
    def price(self, obj): 
        product_request = ProductRequest.objects.get(order=obj)
        if product_request:
            return product_request.price()
        return "-"
    
    price.short_description = "Giá"

    def total_item(self, obj):
        
        return 
    def ref(self, obj): 
        return mark_safe(
            '<a href="./{}/change" style="font-weight:700;width:80px; height:80px;margin: auto !important;padding: auto;" >{}</a>'.format(
                obj.id, obj
            )
        ) 
        ref.short_description = "Ref"
 
    def state(self, obj):  
        icon = '<i class="fas fa-check-circle" style="color: #518bff; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "done":
            icon = '<i class="fas fa-check-circle" style="color: #52947c; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "cancel":
            icon = '<i class="fas fa-times-circle" style="color: #84920b; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "pending":
            icon = '<i class="fas fa-minus-circle" style="color: red; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "open":
            icon = '<i class="fas fa-circle" style="color: #c5634d; font-size: 18px; text-algin:center;"></i>'
        if obj.status == "in_progress":
            icon = '<i class="fas fa-circle" style="color: #4472da; font-size: 18px; text-algin:center;"></i>'
        return mark_safe(icon)

    def date(self, obj): 
        local_time = obj.created_at + datetime.timedelta(hours=7) 
        return local_time.strftime('%d/%m/%Y %H:%M')
    
    def list_comment(self, obj):
        product_request = ProductRequest.objects.get(order=obj)
        comments = MessageRequest.objects.filter(product_request__id=product_request.id)[:5]
        return mark_safe("<br/>".join(list(map(lambda x: x.message, comments))))

    list_comment.short_description = "Danh sách yêu cầu"

    state.short_description = "Trạng thái"
    state.allow_tags = True
    
    date.short_description = "Ngày"
    date.allow_tags = True
    
    class Media:
        css = {"all": ("css/order-list.css",)}

    # def h_w_l(self, obj):
    #     return '{} - {} - {}'.format(str(obj.height), str(obj.width), str(obj.length))
 