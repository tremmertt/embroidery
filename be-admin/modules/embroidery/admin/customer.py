from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.embroidery.models.customer import Customer
from modules.embroidery.tabulars.order import OrderTabularInline

@admin.register(Customer)
class CustomerAdmin(ImportExportModelAdmin, admin.ModelAdmin):

    list_display = [
        # "id",
        "name",
        "email",
        "address",
        "phone_number",
        "company",
        "updated_at",
    ]
    inlines = (OrderTabularInline,)
    search_fields = ("name", "email")
