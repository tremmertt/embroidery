import bcrypt

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

class SignUpiew(APIView):
   
    def post(self, request, media=None):  
        if media == 'email':  
            email = request.data.get('email')
            password = request.data.get('password') 
            name = request.data.get('name') 

            password = password.encode('utf-8')

            # Encrypt the stored pasword:
            hashed = bcrypt.hashpw(password, bcrypt.gensalt(10)) 
            print('hashed',hashed)
                
            if email and password and name: 
                customer = { 
                    "email": email, 
                    "customer_type": CustomerType.INDIVIDUAL,
                    "login_type": LoginType.NORMAL,
                    "password": hashed,
                    "name": name, 
                    "meta_data": {},
                } 
                
                try:
                    customer_db = Customer.objects.get(email=customer['email'])
                except Exception as err:
                    print(err)
                    customer_db = None 
                if customer_db == None:
                    customer_db = Customer.objects.create(**customer)
                    serializer = CustomerSerializer(customer_db,many=False) 
                    print('serializer.data',serializer.data)
                    return Response({
                        "message":"Created customer successfully",
                        "customer": serializer.data,
                        "token": customer_db.encode_auth_token()
                    }) 
                else:
                    return Response(status=404, data={"failed": "Customer is existed"})
        return Response(status=404, data={"failed": "Customer created failed"})
        
