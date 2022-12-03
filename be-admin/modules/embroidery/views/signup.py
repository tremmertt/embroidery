import bcrypt
import uuid

from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import JSONField

from django.core.mail import send_mail
from modules.embroidery.models.customer import Customer, CustomerType, LoginType
from modules.embroidery.serializers.login import LoginSerializer
from modules.embroidery.serializers.customer import CustomerSerializer
from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404  
from django.conf import settings

def send_email_confirm(email, name, code):
    message = """
    <div style="font-size: 14px; line-height: 20px">
    <div>Hi <b>{}</b>,</div>
    <div>We received your registering</div>
    <div>Confirm your account at <a href="{}">here</a></div>
    <hr />
    <div>
        Note: If you don't recognize any activity please ignore and delete this
        email.
    </div>
    <br />
    <div style="display: flex">
        <img style="height: 90px; width: 90px; content: url('https://dcukckgku7y7h.cloudfront.net/static/media/logo.2bc4fb95db9013c64e8d.png');"/>
    <div
      style="
        height: 90px;
        width: 1px;
        background-color: black;
        margin-right: 8px;
      "
    ></div>
        <div style="font-size: 14px; line-height: 20px">
        <div style="font-size: 16px; font-weight: 700; line-height: 24px">
            Embroidery Digitizing
        </div>
        <div>(+84) 44 444 3455</div>
        <div>263 Ngo Gia Tu, Ward 2 Distric 10, Ho Chi Minh city</div>
        <div>Turn your idea to reality</div>
        </div>
    </div>
    </div>

    """
    message = message.format(name, '{}?code={}&email={}'.format(settings.CONFIRM_REDIRECT_URI, code, email))
    print('settings.CONFIRM_REDIRECT_URI',settings.CONFIRM_REDIRECT_URI)
    print('settings.EMAIL_NO_REPLY_USER',settings.EMAIL_NO_REPLY_USER)
    print('settings.EMAIL_NO_REPLY_PASSWORD',settings.EMAIL_NO_REPLY_PASSWORD)
    send_mail(
        subject='[Register Account] Thank you for registering our Embroidery service',
        message=message,
        from_email=settings.EMAIL_NO_REPLY_USER,
        recipient_list=[email],
        auth_user=settings.EMAIL_NO_REPLY_USER,
        auth_password=settings.EMAIL_NO_REPLY_PASSWORD,
        html_message=message.replace('\n', '<br>')
    )

class SignUpiew(APIView):
   
    def post(self, request, media=None):  
        if media == 'confirmEmail': 
            email = request.data.get('email')
            code = request.data.get('code')
            try:
                customer_db = Customer.objects.get(email=email)
                if customer_db and customer_db.code_confirm:
                    info = customer_db.decode_auth_token(code)
                    if info:
                        customer_db.is_confirm = True
                        customer_db.code_confirm = ''
                        customer_db.save()
                        return Response(status=200, data={"message": "Confirm email is successfully"})
                return Response(status=404, data={"message": "Code is not valid"})
            except Exception as err:
                customer_db = None 
            
            return Response(status=404, data={"message": "Confirm email failed"})

        if media == 'email':  
            email = request.data.get('email')
            password = request.data.get('password') 
            name = request.data.get('name') 

            password = password.encode('utf-8')

            # Encrypt the stored pasword:
            hashed = bcrypt.hashpw(password, bcrypt.gensalt(10))  
                
            if email and password and name: 
                customer = { 
                    "email": email, 
                    "customer_type": CustomerType.INDIVIDUAL,
                    "login_type": LoginType.NORMAL,
                    "password": hashed,
                    "name": name, 
                    "is_confirm": False,
                    "meta_data": {},
                } 
                
                try:
                    customer_db = Customer.objects.get(email=customer['email']) 
                except Exception as err:
                    print(err)
                    customer_db = None 
                if customer_db == None:
                    try:
                        customer_db = Customer.objects.create(**customer)
                        serializer = CustomerSerializer(customer_db,many=False)  
                        customer_db.code_confirm = customer_db.encode_auth_token()
                        customer_db.save()
                        print('customer_db',customer_db)
                        send_email_confirm(customer_db.email, customer_db.name, customer_db.code_confirm)
                        return Response(status=200, data={
                            "message":"Created customer successfully",
                        }) 
                    except:
                        customer_db.delete()
                        return Response(status=404, data={
                            "message":"Error, customer created failed",
                        }) 
                else:
                    return Response(status=409, data={"message": "Email has been existed"})
        return Response(status=404, data={"message": "Customer created failed"})
        
