import uuid
import base64

from datetime import datetime
from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404  

from modules.embroidery.models.order import Order
from modules.embroidery.models.item import ProductRequest
from modules.embroidery.serializers.order import OrderSerializer, ItemSerializer
from django.core.files.base import ContentFile

class OrderView(APIView):
    def get(self, request, pk=None):
        if pk:
            order = get_object_or_404(Order.objects.all(), pk=pk)
            order.items = ProductRequest.objects.filter(order=order)
            serializer = OrderSerializer(order)
            return Response({"order": serializer.data})
            
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response({"orders": serializer.data})
    
    def post(self, request):
        order = request.data.get('order')
        # Create an order from the above data
        serializer = OrderSerializer(data=order)
        if serializer.is_valid(raise_exception=True):
            order_saved = serializer.save()
            items = order.get('items', []) 
            serializer_items = ItemSerializer(items, many=True) 
            for serializer_item in serializer_items.data:
                try:
                    encode_image = serializer_item.get('encode_image', '')  
                    del serializer_item['encode_image']

                    new_serializer_item = dict(serializer_item)
                    new_serializer_item['order'] = order_saved.id
                    if encode_image: 
                        format_file, img_str = encode_image.split(';base64,') 
                        ext = format_file.split('/')[-1] 
                        new_serializer_item['image'] = ContentFile(base64.b64decode(img_str), name='{}_{}.{}'.format(datetime.today().strftime('%Y-%m-%d'), uuid.uuid4(), ext)) # You can save this as file instance.

                    serializer_item = ItemSerializer(data=new_serializer_item) 
                    if serializer_item.is_valid(raise_exception=True):
                        print(serializer_item.validated_data)
                        
                        serializer_item.save()
                except Exception as err:
                    print(err)
        return Response({"success": "Order '{}' created successfully".format(order_saved.id)})

    def put(self, request, pk):
        saved_order = get_object_or_404(Order.objects.all(), pk=pk)
        data = request.data.get('order')
        serializer = OrderSerializer(instance=saved_order, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            order_saved = serializer.save()
        return Response({"success": "Order '{}' updated successfully".format(order_saved.id)})


    def delete(self, request, pk):
        # Get object with this pk
        order = get_object_or_404(Order.objects.all(), pk=pk)
        order.delete()
        return Response({"message": "Order with id `{}` has been deleted.".format(pk)},status=204)