from django import forms
from django.apps import apps
from django.forms import BaseInlineFormSet

class OrderInlineForm(forms.ModelForm):
    class Meta:

        widgets = {
            "name": forms.TextInput(attrs={"size": 35, "align":"center"}),
            "meta_data": forms.TextInput(attrs={"size": 25, "align":"center"}), 
            "total_item": forms.TextInput(attrs={"size": 5, "align":"center"}), 
            "total": forms.TextInput(attrs={"size": 5, "align":"center"}), 
            "invoice_status": forms.TextInput(attrs={"size": 10, "align":"center"}), 
            "payment_method": forms.TextInput(attrs={"size": 10, "align":"center"}), 
        }
