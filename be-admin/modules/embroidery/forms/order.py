from django import forms
from django.apps import apps
from django.forms import BaseInlineFormSet

class InvoiceItemInlineForm(forms.ModelForm):
    pass
    # class Meta:

    #     widgets = {
    #         "name": forms.TextInput(attrs={"size": 35}),
    #         "height": forms.TextInput(attrs={"size": 5}),
    #         "width": forms.TextInput(attrs={"size": 5}),
    #         "length": forms.TextInput(attrs={"size": 5}),
    #     }
