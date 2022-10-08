from django.contrib import admin, messages
from django.utils.html import mark_safe

from modules.embroidery.models.order import Order 
from modules.embroidery.models.item import Item 
from modules.embroidery.forms.order import OrderInlineForm
    
class OrderTabularInline(admin.TabularInline):
    model = Order
    form = OrderInlineForm
    extra = 0
    fields = ( 
        "name",
        "total_item",
        "total",
        "invoice_status",
        "payment_method", 
        "assignee",
        "meta_data",
        "order_date", 
    )
    readonly_fields = [
        "name",
        "created_at", "total_item", "total",
        "invoice_status", 
        "assignee",
        "name",
        "payment_method", 
        "order_date", 
    ]
    
    def order_date(self, obj):
        return obj.created_at.strftime('%H:%M:%S %d-%m-%Y')
    order_date.short_description = "Order Date"

    def has_delete_permission(self, request, obj=None):
        # Disable delete
        return False

    def total_item(self, obj): 
        try: 
            list_item = Item.objects.filter(order__id=obj.id)
            return len(list_item)
        except Exception as err:
            print(err)
        return 0
            

    def total(self, obj):
        try: 
            list_item = Item.objects.filter(order__id=obj.id)
            total = 0
            for item in list_item:
                total += item.quantity * item.unit_price
            return total
        except Exception as err:
            print(err)
        return 0
 