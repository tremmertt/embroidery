import uuid
from datetime import datetime
from django.utils.translation import gettext_lazy as _
from django.db import models
from modules.embroidery.models.order import Order
from django_mysql.models import ListCharField
from PIL import Image

class UnitFormat(models.TextChoices):
    inches = "inches", _("inches")
    mm = "mm", _("mm") 

class OutputFormat(models.TextChoices):
    JPEG = "JPEG", _("JPEG")
    JPG = "JPG", _("JPG")
    PNG = "PNG", _("PNG")
    PDF = "PDF", _("PDF") 
    XXX = "XXX", _("XXX") 

    ART = "ART", _("ART")
    CND = "CND", _("CND")
    CSD = "CSD", _("CSD")
    DST = "DST", _("DST")
    EMB = "EMB", _("EMB")
    EXP = "EXP", _("EXP")
    HUS = "HUS", _("HUS")
    JEF = "JEF", _("JEF")
    PCS = "PCS", _("PCS")
    PEC = "PEC", _("PEC")
    PES = "PES", _("PES")
    SEW = "SEW", _("SEW")
    VP3 = "VP3", _("VP3")
    VIP = "VIP", _("VIP") 


class ProductRequest(models.Model):

    class Meta:
        verbose_name_plural = 'Sản phẩm'

    id = models.AutoField(primary_key=True)
    height = models.FloatField("Dài", default=0, blank=True)
    width = models.FloatField("Rộng", default=0, blank=True) 
    unit = models.CharField("Đơn vị đo",
        max_length=6, choices=UnitFormat.choices, default=UnitFormat.inches
    )
    quantity = models.IntegerField("Số lượng",default=1,blank=True)
    unit_price = models.DecimalField("Đơn vị giá",max_digits=10, decimal_places=2, default=0,blank=True,help_text="GIá trên 1 sản phẩm")  

    messages = models.CharField("Thông tin",max_length=2048, default="", blank=True, help_text="Hãy nhập các thông tin yêu cầu")
    # colors = models.CharField("Màu sắc",max_length=1024, default="Màu như hình mẫu", blank=True)
    # files = models.FileField("Hình ảnh",upload_to="static/item/", blank=True,null=True)

    order = models.ForeignKey(Order, blank=True, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def images_tag(self):
        html_images = ""
        for image in self.images.path:
            print(len(image))
            html_images += '<img src="%s" width="150" height="150" />' % image
        return mark_safe(html_images)

    images_tag.short_description = 'Danh sách hình ảnh'

    def __str__(self):
        return "#PR{}".format(self.id)

    def price(self):
        return self.quantity * self.unit_price

def get_file_path(instance, filename):
    ext = filename.split('.')[-1]
    return "static/product_response/{}/{}.{}".format(instance.order.id, str(datetime.timestamp(datetime.now())).split('.')[0], ext)

class FileProductRequest(models.Model):
    class Meta:
        verbose_name = 'Hình ảnh yêu cầu'
        verbose_name_plural = 'Hình ảnh yêu cầu'

    id = models.AutoField(primary_key=True)
    order = models.ForeignKey(Order, blank=True, on_delete=models.CASCADE)
    image = models.FileField("Hình ảnh",upload_to=get_file_path, blank=True,null=True) 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "FILE_INPUT#{}".format(self.id)

    def save(self, *args, **kwargs):
        super(FileProductRequest, self).save(*args, **kwargs)
        img = Image.open(self.image.path)
        if img.height > 1125 or img.width > 1125:
            img.thumbnail((1125,1125))
        img.save(self.image.path,quality=70,optimize=True)

class FileProductResponse(models.Model):
    class Meta:
        verbose_name = 'File output'
        verbose_name_plural = 'File output'

    id = models.AutoField(primary_key=True)
    order = models.ForeignKey(Order, blank=True, on_delete=models.CASCADE)
    efile = models.FileField("File output",upload_to=get_file_path, blank=True,null=True) 
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "FILE_OUTPUT#{}".format(self.id)

    # def save(self, *args, **kwargs):
    #     super(FileProductRequest, self).save(*args, **kwargs)
    #     img = Image.open(self.image.path)
    #     if img.height > 1125 or img.width > 1125:
    #         img.thumbnail((1125,1125))
    #     img.save(self.image.path,quality=70,optimize=True)


class OutputFormat(models.Model):
    class Meta:
        verbose_name = 'Đầu ra'
        verbose_name_plural = 'Đầu ra'
    
    id = models.AutoField(primary_key=True)
    output_format = models.CharField("Đầu ra",
        max_length=50, choices=OutputFormat.choices, default=OutputFormat.PDF
    )
    product_request = models.ForeignKey(ProductRequest, on_delete=models.CASCADE)
    def __str__(self):
        return "{}".format(self.output_format)
 
class MessageRequest(models.Model):
    
    class Meta:
        verbose_name = 'Danh sách yêu cầu'
        verbose_name_plural = 'Danh sách yêu cầu'

    id = models.AutoField(primary_key=True)
    message = models.CharField(max_length=256, blank=True)
    product_request = models.ForeignKey(ProductRequest, on_delete=models.CASCADE)

    def __str__(self):
        return "{}".format(self.message)