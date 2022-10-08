from django import forms
from django.apps import apps
from django.forms import BaseInlineFormSet

# Create your forms here.
class ItemInlineForm(forms.ModelForm):
    class Meta:

        widgets = {
            "name": forms.TextInput(attrs={"size": 25}),
            "height": forms.TextInput(attrs={"size": 5}),
            "width": forms.TextInput(attrs={"size": 5}),
            "length": forms.TextInput(attrs={"size": 5}),
            "quantity": forms.TextInput(attrs={"size": 5}),
            "unit_price": forms.TextInput(attrs={"size": 5}),
        }