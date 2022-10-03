from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response

from modules.emboridery.models.order import Order
from modules.emboridery.models.item import Item
from modules.emboridery.serializers.order import OrderSerializer, ItemSerializer

# Create your views here.
class OrderList(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetail(generics.RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderItemList(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

    def get_queryset(self):
        order = Order.objects.get(
            pk=self.kwargs.get("pk")
        )  # .get_descendants(include_self=True).values_list('id', flat=True)
        print("order", order)
        return Item.objects.filter(order=order)
