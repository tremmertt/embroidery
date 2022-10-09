import uuid
import django

from django.conf import settings
from datetime import datetime
from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.db.models import JSONField
from django.core.mail.message import EmailMessage
from modules.embroidery.models.customer import Customer
from modules.embroidery.models.order import Order
from modules.embroidery.utils.generate_receipt import ReceiptPDF
from django.core.files.base import ContentFile

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

def mapping_template_footer(footer="", host=""):
    if footer and host:
        name_project = "Embroidery Digitizing"
        phone_number = "(+84) 44 444 3455"
        address = "263 Ngo Gia Tu, Ward 2 Distric 10, Ho Chi Minh city"
        email = "abcxyz@gmail.com"
        greeting = "Turn your idea to reality"
        image_logo = "{}/static/admin/simpleui-x/img/logo.png".format(host)
        url_messenger = "#messenger"
        image_messenger = "{}/static/admin/simpleui-x/img/messenger.png".format(host)
        url_facebook = "#facebook"
        image_facebook = "{}/static/admin/simpleui-x/img/facebook.png".format(host)
        url_instagram = "#instagram"
        image_instagram = "{}/static/admin/simpleui-x/img/instagram.png".format(host)
        
        footer = str(footer).format(
            image_logo,
            name_project,
            phone_number,
            address,
            email,
            greeting,
            url_messenger,
            image_messenger,
            url_facebook,
            image_facebook,
            url_instagram,
            image_instagram,
        ) 
        return footer
    return footer

def mapping_template_content(content="", host="", name_customer="", order_time="", link_receipt=""):
    if content and host and name_customer and order_time and link_receipt:
        content = str(content).format(
            name_customer,
            name_project,
            order_time,
            link_receipt,
        ) 
        return content
    return content

class Email(models.Model):

    class Meta:
        verbose_name_plural = 'Send Message'

    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    sender = models.ForeignKey(Mailer, editable=True, on_delete=models.CASCADE)
    title = models.CharField(max_length=256)


    host = 'http://127.0.0.1:8000'
    default_content = ""
    with open('modules/contact/models/template/content_email.html') as f:
        default_content = f.read()
        default_content = mapping_template_content(default_content, host)
    content = models.TextField(max_length=1000000, blank=True, default=default_content)

    default_footer = ""
    with open('modules/contact/models/template/footer_email.html') as f:
        default_footer = f.read()
        default_footer = mapping_template_footer(default_footer, host)
   
    footer = models.TextField(max_length=1000000, blank=True, default= default_footer)
    order = models.ForeignKey(Order, editable=True, blank=True, null=True,on_delete=models.CASCADE)
    has_attach_receipt = models.BooleanField('Has attach receipt', default=True)
    is_sent = models.BooleanField('Sent', default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    sent_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.title)
 
    def update_mapping_template_content(self):
        try:
            if self.content and self.host and self.order and self.order.customer and self.order.customer.name and self.order.created_at and self.order.receipt_pdf:
                name_project = "Embroidery"
                self.content = str(self.content).format(
                    self.order.customer.name,
                    name_project,
                    self.order.created_at,
                    self.host + self.order.receipt_pdf.url,
                )  
        except Exception as err:
            print(err)
        return self.content

    def update_mapping_template_footer(self):
        try:
            name_project = "Embroidery"
            phone_number = "(+84) 44 444 3455"
            address = "263 Ngo Gia Tu, Ward 2 Distric 10, Ho Chi Minh city"
            email = "abcxyz@gmail.com"
            greeting = "Turn your idea to reality"
            image_logo = "{}/static/admin/simpleui-x/img/logo.png".format(self.host)
            url_messenger = "#messenger"
            image_messenger = "{}/static/admin/simpleui-x/img/messenger.png".format(self.host)
            url_facebook = "#facebook"
            image_facebook = "{}/static/admin/simpleui-x/img/facebook.png".format(self.host)
            url_instagram = "#instagram"
            image_instagram = "{}/static/admin/simpleui-x/img/instagram.png".format(self.host)
            self.footer = self.footer.format(
                image_logo,
                name_project,
                phone_number,
                address,
                email,
                greeting,
                url_messenger,
                image_messenger,
                url_facebook,
                image_facebook,
                url_instagram,
                image_instagram,
            ) 
        except Exception as err:
            print(err)

    def send_email(self, request):

        list_mailer_email = MailerEmail.objects.filter(mail__id__exact=self.id)
        list_receiver = [ _m.receiver.email for _m in list_mailer_email]
        
        print({
            "subject": self.title,
            "content": self.content,
            "list_receiver": list_receiver
        })
        
        try:
            if self.sender.mail and self.sender.token != "":
                if self.order:
                    receipt_pdf_service = ReceiptPDF()
                    buffer = receipt_pdf_service.create_report(self.order)
                    receipt_pdf = ContentFile(buffer.read(), name='Receipt-{}_{}.pdf'.format(datetime.today().strftime('%Y-%m-%d'), self.order.id)) 
                    self.order.receipt_pdf = receipt_pdf
                    self.order.save()

                # send_mail(
                #     subject=self.title,
                #     message=self.content.replace('\n', '<br>'),
                #     from_email=self.sender.mail,
                #     recipient_list=list_receiver,
                #     auth_user=self.sender.mail, 
                #     auth_password=self.sender.token,  
                #     html_message=self.content.replace('\n', '<br>')
                # )
                if self.sender.mail and self.sender.token:
                    email = Email.objects.get(id=self.id)

                    settings.EMAIL_HOST_USER=self.sender.mail
                    settings.EMAIL_HOST_PASSWORD=self.sender.token
                    
                    self.content = "<div>" + self.content + "</div>" 
                    if self.has_attach_receipt and self.order and self.order.receipt_pdf:
                        email.has_attach_receipt = True
                    else:
                        email.has_attach_receipt = False

                    self.update_mapping_template_content()
                    self.update_mapping_template_footer()
                    self.content += "<br><br><div>" + self.footer + "</div><br><br>"
        
                    email_message = EmailMessage(
                        subject=self.title,
                        body=self.content,
                        from_email=self.sender.mail,
                        to=list_receiver,
                        # html_message=None
                        # bcc=['marketing@coffeehouse.com'], cc=['ceo@coffeehouse.com']
                        # headers = {'Reply-To': 'support@coffeehouse.com'}
                    )
                    if self.has_attach_receipt and self.order and self.order.receipt_pdf:
                        pdf_f = self.order.receipt_pdf.open(mode='rb') 
                        data = pdf_f.read()
                        pdf_f.seek(0)
                        pdf_f.seekable() 
                        email_message.attach('receipt.pdf', data) 
                    
                    email_message.content_subtype = "html"  
                    email_message.send(fail_silently=False)
                    
                    email.is_sent = True
                    email.sent_at = datetime.now
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
    receiver = models.ForeignKey(Customer, blank=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} - {}".format(self.receiver.name, self.receiver.email)