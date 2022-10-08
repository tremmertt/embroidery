from rest_framework import serializers
from modules.embroidery.models import sample

class SampleSerializer(serializers.ModelSerializer):
    class Meta:
        model = sample.Sample
        fields = [
            "id",
            "name",
            "image",
            "height",
            "width",
            "length", 
        ]
 