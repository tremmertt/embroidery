from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import JSONField

from modules.embroidery.models.customer import Customer, CustomerType, LoginType
from modules.embroidery.serializers.login import LoginSerializer
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
    
    def post(self, request, media=None): 
        if media == 'google':
            config = {
                "state": request.data.get('state'),
                "code": request.data.get('code')
            }

            user = Customer.login_by_google(config)
            if user and user.get('id'): 
                customer = {
                    "name": user['name'],
                    "email": user['email'], 
                    "customer_type": CustomerType.INDIVIDUAL,
                    "login_type": LoginType.GOOGLE,
                    "name": user['name'],
                    "image": user['picture'],
                    "meta_data": user,
                }
                print('customer', customer)
                try:
                    customer_db = Customer.objects.get(email=customer['email'])
                except:
                    customer_db = None
                if customer_db == None:
                    customer_db = Customer.objects.create(**customer)
                    serializer = CustomerSerializer(customer_db,many=False) 
                    print('serializer.data',serializer.data)
                    return Response({
                        "message":"created customer successfully",
                        "customer": serializer.data,
                        "token": customer_db.encode_auth_token()
                    }) 
                else:
                    serializer = CustomerSerializer(customer_db,many=False) 
                    return Response({
                        "message":"login successfully", 
                        "customer": serializer.data,
                        "token": customer_db.encode_auth_token()
                    }) 

        return Response(status=404,data={"failed": "Customer created failed"})
        
