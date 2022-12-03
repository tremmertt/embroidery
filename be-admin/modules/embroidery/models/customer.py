import uuid
import django
import jwt

from django.conf import settings
from datetime import datetime, timedelta
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from django.core.validators import RegexValidator

class AccountLogin(models.Model):
    
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    list_account = ArrayField(
        ArrayField(
            models.CharField(max_length=10, blank=True),
            size=10,
            blank=True,
        ),
        size=100,
        default=list,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.name, self.agency)

class CustomerType(models.TextChoices): 
    INDIVIDUAL = "individual", _("INDIVIDUAL")
    ORGANIZATION = "organization", _("ORGANIZATION")

class LoginType(models.TextChoices): 
    NORMAL = "normal", _("NORMAL")
    GOOGLE = "google", _("GOOGLE")
    FACEBOOK = "facebook", _("FACEBOOK") 


class BlacklistToken(models.Model):
    """
    Token Model for storing JWT tokens
    """
    __tablename__ = 'blacklist_tokens'

    id = models.IntegerField(primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    token = models.CharField(max_length=500, unique=True)
    blacklisted_on = models.DateTimeField(auto_now=True)
 
    def __str__(self):
        return '<id: token: {}'.format(self.token)

    @staticmethod
    def check_blacklist(auth_token):
        # check whether auth token has been blacklisted
        res = BlacklistToken.objects.filter(token=str(auth_token)).first()
        if res:
            return True
        else:
            return False

class Customer(models.Model):

    class Meta:
        verbose_name_plural = 'Customer'
        
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=256, default="Customer {}".format(str(datetime.timestamp(datetime.now())).split('.')[0]))
    email = models.EmailField(max_length=70, blank=True, unique=False)
    address = models.CharField(max_length=256, blank=True) 
    password = models.BinaryField(blank=True)
    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True) # Validators should be a list
    customer_type = models.CharField(max_length=50, choices=CustomerType.choices, default=CustomerType.INDIVIDUAL)
    login_type = models.CharField(max_length=50, choices=LoginType.choices, default=LoginType.GOOGLE)
    company = models.CharField(max_length=256, blank=True, default="")
    image = models.CharField(max_length=500, blank=True, default="") 
    code_confirm = models.CharField(max_length=500, blank=True, default="") 
    is_confirm = models.BooleanField(default=True) 
    meta_data = JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if self.phone_number:
            return "{} - {}".format(self.name, self.phone_number)
        if self.email:
            return "{} - {}".format(self.name, self.email)
        return self.name

    def encode_auth_token(self, user_id=None, seconds=600):
        """
        Generates the Auth Token
        :return: string
        """
        try:
            payload = {
                'exp': datetime.utcnow() + timedelta(days=0, seconds=seconds),
                'iat': datetime.utcnow(),
                'sub': user_id if user_id else str(self.id)
            }
            return jwt.encode(
                payload,
                settings.SECRET_KEY,
                algorithm='HS256'
            )
        except Exception as e:
            return e
 
    def decode_auth_token(self, auth_token):
        """
        Validates the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(auth_token, settings.SECRET_KEY, algorithms=['HS256'])
            is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
            print('is_blacklisted_token',is_blacklisted_token)
            if is_blacklisted_token:
                return 'Token blacklisted. Please log in again.'
            else:
                return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

    @staticmethod
    def login_by_google(config=None):
        from modules.embroidery.models.google.google_account import AccountGoogleService

        if config and config.get('state') and config.get('code'):
            try:
                config, credentials = AccountGoogleService.get_config_auth_google(
                    state=config['state'],
                    code=config['code'],
                    scope=' '.join([
                        'openid', 
                        'https://www.googleapis.com/auth/userinfo.profile',
                        'https://www.googleapis.com/auth/userinfo.email'
                    ])
                )
                user_info = AccountGoogleService.get_user_info(credentials)
                return user_info
            except Exception as err:
                print(err)
                return None
        else:
            url = AccountGoogleService.get_link_auth_google()
            return url
 