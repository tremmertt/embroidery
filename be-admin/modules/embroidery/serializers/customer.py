from rest_framework import serializers
from modules.embroidery.models import customer, shop, order, item


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = customer.Customer
        fields = [
            "id",
            "name",
            "email",
            "phone_number",
            "company",
            "address",
        ]
