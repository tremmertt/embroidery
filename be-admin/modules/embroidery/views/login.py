import bcrypt

from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import JSONField
from django.http import JsonResponse

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
            print('user',user)
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
                except Exception as e:
                    print('e',e)
                    customer_db = None
                if customer_db == None:
                    customer_db = Customer.objects.create(**customer)
                    print('customer_db',customer_db)
                    serializer = CustomerSerializer(customer_db,many=False) 
                    print('serializer.data',customer_db.encode_auth_token())
                    return JsonResponse({
                        "message":"created customer successfully",
                        "customer": serializer.data,
                        "token": customer_db.encode_auth_token()
                    }) 
                else:
                    print('customer_db',customer_db)
                    serializer = CustomerSerializer(customer_db,many=False) 
                    print('serializer.data',customer_db.encode_auth_token())
                    return JsonResponse({
                        "message":"login successfully", 
                        "customer": serializer.data,
                        "token": customer_db.encode_auth_token()
                    }) 

        if media == 'email':
            email = request.data.get('email')
            password = request.data.get('password')  
            if email and password: 
                try:
                    customer_db = Customer.objects.get(email=email)
                except:
                    customer_db = None
                print('customer_db',customer_db)
                if customer_db and customer_db.password:
                    hashed_pass = customer_db.password
                    hashed_input_pass = password.encode('utf-8')
                    if customer_db.is_confirm and bcrypt.checkpw(hashed_input_pass, bytes(hashed_pass)):
                        serializer = CustomerSerializer(customer_db,many=False) 
                        return JsonResponse({
                            "message":"login successfully", 
                            "customer": serializer.data,
                            "token": customer_db.encode_auth_token()
                        }) 
                    else:
                        return Response(status=404, data={
                            "message":"Login failed, you need to confirm your email",
                        })  
                elif customer_db == None:
                    return Response(status=404, data={
                        "message":"Customer is not existed",
                    }) 
                else:
                    return Response(status=404, data={
                        "message":"Login failed, email or password incorrect",
                    }) 

        return Response(status=404, data={"message": "Customer created failed"})
        
