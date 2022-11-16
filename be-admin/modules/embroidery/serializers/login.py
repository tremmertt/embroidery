import base64
from django.core.files.base import ContentFile
from rest_framework import serializers 

class LoginSerializer(serializers.ModelSerializer):
    code = serializers.CharField(default="")
    state = serializers.CharField(default="")
