import base64
from django.core.files.base import ContentFile
from rest_framework import serializers
from modules.embroidery.models import customer, shop, order, item


class ItemSerializer(serializers.ModelSerializer):
    encode_image = serializers.CharField(default="")

    class Meta:
        model = item.ProductRequest
        fields = [
            "id",
            "name",
            "image",
            "encode_image",
            "height",
            "width",
            "output_format",
            "length",
            "order",
            "status", 
        ]

    def create(self, validated_data): 
        if 'encode_image' in validated_data.keys(): del validated_data['encode_image']
        return item.Item.objects.create(**validated_data)

class OrderSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = order.Order
        fields = [
            "id",
            "name",
            "customer",
            "assignee",
            "items",
            "start_time",
            "end_time",
            "status",
            "created_at",
            "updated_at",
        ]

    def create(self, validated_data): 
        return order.Order.objects.create(**validated_data)

    def update(self, instance, validated_data):  
        instance.name = validated_data.get('name', instance.name)
        instance.customer = validated_data.get('customer', instance.customer)
        instance.assignee = validated_data.get('assignee', instance.assignee)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance