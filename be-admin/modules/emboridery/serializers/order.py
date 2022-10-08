from rest_framework import serializers
from modules.emboridery.models import customer, shop, order, item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = item.Item
        fields = [
            "id",
            "name",
            "image",
            "height",
            "width",
            "length",
            "status",
        ]


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
        ]
