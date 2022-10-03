from rest_framework import serializers
from modules.emboridery.models import customer, shop, order, item


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = customer.Customer
        fields = [
            "id",
            "name",
            "email",
            "agency",
            "address",
        ]
