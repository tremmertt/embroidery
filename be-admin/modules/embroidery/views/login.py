from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response

from modules.embroidery.models.customer import Customer
from modules.embroidery.serializers.customer import CustomerSerializer
from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404  

class LoginView(APIView):
    def get(self, request, media=None):  
        url, state = Customer.login_by_google()
        return Response({"url": url, "state": state})
    
    # def post(self, request):
    #     customer = request.data.get('customer')
    #     # Create an customer from the above data
    #     serializer = CustomerSerializer(data=customer)
    #     if serializer.is_valid(raise_exception=True):
    #         customer_saved = serializer.save()
    #     return Response({"success": "Customer '{}' created successfully".format(customer_saved.id)})
