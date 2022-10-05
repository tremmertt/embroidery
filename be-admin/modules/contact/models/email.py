import uuid
import django

from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from django.core.mail.message import EmailMessage

class Mailer(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    mail = models.EmailField(max_length=256, blank=True, editable=True)
    name = models.CharField(max_length=256, blank=True, editable=True)
    token = models.CharField(max_length=256, blank=True, editable=True)

    def __str__(self):
        return "{} - {}".format(self.name, self.mail)

    class Meta:
        verbose_name_plural = 'E-Mailer'

class Email(models.Model):

    class Meta:
        verbose_name_plural = 'Send Message'

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    sender = models.ForeignKey(Mailer, blank=True, editable=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=256, blank=True)
    content = models.TextField(blank=True)
    is_sent = models.BooleanField('Sent', default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.title)

    def send_email(self, request):
        list_mailer_email = MailerEmail.objects.filter(mail__id__exact=self.id)
        list_receiver = [ _m.receiver.mail for _m in list_mailer_email]

        print({
            "subject": self.title,
            "content": self.content,
            "list_receiver": list_receiver
        })
        
        try:
            if self.sender.mail and self.sender.token != "":
                send_mail(
                    subject=self.title,
                    message=self.content,
                    from_email=self.sender.mail,
                    recipient_list=list_receiver,
                    auth_user=self.sender.mail, 
                    auth_password=self.sender.token,  
                    html_message=self.content
                )
                # email_message = EmailMessage(
                #     subject=self.title,
                #     body=self.content,
                #     from_email=self.sender.mail,
                #     to=list_receiver,
                #     auth_user=self.sender.mail, 
                #     auth_password=self.sender.token,  
                #     # html_message=None
                #     # bcc=['marketing@coffeehouse.com'], cc=['ceo@coffeehouse.com']
                #     # headers = {'Reply-To': 'support@coffeehouse.com'}
                # )
                # email_message.content_subtype = "html"
                # email_message.send()
                

                email = Email.objects.get(id=self.id)
                email.is_sent = True
                email.save()
            else:
                raise Exception('Not have token')

        except Exception as e:
            print(e)
            email = Email.objects.get(id=self.id)
            email.is_sent = False
            email.save()
            if str(e) == 'Not have token':
                messages.add_message(request, messages.ERROR, 'Not have token, so email cannot send')
            raise Exception('Sent email failed')

class MailerEmail(models.Model):
    mail = models.ForeignKey(Email, blank=True, on_delete=models.CASCADE) 
    receiver = models.ForeignKey(Mailer, blank=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.receiver.name,self.receiver.mail)
