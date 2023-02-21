import uuid

from django import forms
from django.apps import apps
from django.forms import BaseInlineFormSet, BaseModelForm
from modules.embroidery.models.item import MessageRequest, ProductRequest
from django.core.files.base import ContentFile

# Create your forms here.
class ImageInlineForm(forms.ModelForm):
     
    class Meta:
        fields = '__all__'
        widgets = {
            "image": forms.ClearableFileInput(attrs={"size": 1,'class': 'upload ','inputtype':'file','name':'images','multiple':False }),
        }

class FileProductResponseInlineForm(forms.ModelForm):

    class Meta:
        fields = '__all__'
        widgets = {
            "efile": forms.ClearableFileInput(attrs={"size": 1,'class': 'upload ','inputtype':'file','name':'images','multiple':False }),
        }

class ItemInlineForm(forms.ModelForm):  
    # colors = forms.CharField()
    # images = forms.ImageField(widget=forms.ClearableFileInput(
    #     attrs={'class': 'upload ','inputtype':'file','name':'images','multiple':True })
    # )

    class Meta: 
        # pass  
        widgets = {
            "name": forms.TextInput(attrs={"size": 25}),
            "height": forms.TextInput(attrs={"size": 10}),
            "width": forms.TextInput(attrs={"size": 10}),
            "quantity": forms.TextInput(attrs={"size": 5}),
            "messages": forms.Textarea(attrs={"size": 10, "cols":70,"rows":10}),
            # "images": forms.ClearableFileInput(attrs={'class': 'upload ','inputtype':'file','name':'images','multiple':True }),
            # "images_tags": 
        }
        
class ImageInlineForm(forms.ModelForm):  
    class Meta: 
        fields = ["image"]