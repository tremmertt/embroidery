from django.contrib import admin, messages
from django.utils.translation import gettext_lazy as _


class FilterByStatus(admin.SimpleListFilter):
    title = _("Status")
    parameter_name = "status"

    def lookups(self, request, model_admin):
        return [
            ("open", "OPEN"),
            ("in_progress", "IN_PROGRESS"), 
            ("done", "DONE"), 
            ("cancel", "CANCEL"), 
        ]

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(status=self.value())
