from django.contrib import admin, messages
from import_export.admin import ImportExportModelAdmin
from modules.emboridery.models.customer import Customer


@admin.register(Customer)
class CustomerAdmin(ImportExportModelAdmin, admin.ModelAdmin):

    list_display = [
        # "id",
        "name",
        "email",
        "address",
        "agency",
        "updated_at",
    ]
    search_fields = ("name", "email")
