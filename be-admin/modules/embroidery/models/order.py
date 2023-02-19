import uuid
import django

from gettext import ngettext
from django.contrib import admin, messages
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.db import models
from django.db.models import JSONField
from django.contrib.auth.models import User

from modules.embroidery.models.customer import Customer 

class OrderStatus(models.TextChoices):
    OPEN = "open", _("Mở")
    IN_PROGRESS = "in_progress", _("Đang thực hiện")
    # PENDING = "pending", _("PEDNING")
    DONE = "done", _("Hoàn tất")
    CANCEL = "cancel", _("Hủy bỏ")

class InvoiceStatus(models.TextChoices):
    INIT = "init", _("Thiết lập")
    PAID = "paid", _("Đã trả")
    DEBT = "debt", _("Nợ")

class PaymentMethod(models.TextChoices):
    CARD = "card", _("Card")
    TRANSFER = "transfer", _("Chuyển khoản")
    MANUAL = "manual", _("Thủ công")

class OutputType(models.TextChoices):
    VECTOR = "vector", _("Vector")
    EMBROIDERY = "embroidery", _("Embroidery") 

class RequestType(models.TextChoices):
    quote = "quote", _("Báo giá")
    order = "order", _("Đặt hàng") 

class Order(models.Model):

    class Meta:
        verbose_name_plural = 'Order'

    id = models.AutoField("Ref",primary_key=True)
    name = models.CharField("Tên",max_length=256, default="Order {}".format(str(datetime.timestamp(datetime.now())).split('.')[0]))
    status = models.CharField("Trạng thái",
        max_length=50, choices=OrderStatus.choices, default=OrderStatus.OPEN
    )  
    output_type = models.CharField("Loại đầu ra",
        max_length=10, choices=OutputType.choices, default=OutputType.VECTOR
    )
    payment_method = models.CharField("Phương thức",
        max_length=50, choices=PaymentMethod.choices, default=PaymentMethod.CARD
    )
    request_type = models.CharField("Loại yêu cầu",
        max_length=5, choices=RequestType.choices, default=RequestType.order
    )
    receipt_pdf = models.FileField(editable=False,null=True,blank=True,upload_to="static/receipt/pdf/")
    created_at = models.DateTimeField("Ngày",auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return "#{:05d}".format(self.id)

    
    