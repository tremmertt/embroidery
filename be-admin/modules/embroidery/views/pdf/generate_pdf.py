from django.views.generic import FormView, TemplateView
from django.urls import reverse_lazy
from modules.embroidery.models import order
from datetime import datetime 

from modules.embroidery.utils.generate_receipt import ReceiptPDF

class GeneratePDFView(TemplateView):

    def get(self, request, *args, **kwargs): 
        from django.http import FileResponse, HttpResponse
        from django.urls import reverse
        from django.shortcuts import redirect

        id = kwargs.get('pk') 
        if id:
            try:
                order_obj = order.Order.objects.get(id=id) 
                receipt_pdf_service = ReceiptPDF()
                buffer = receipt_pdf_service.create_report(order_obj)
                return FileResponse(buffer, as_attachment=True, filename='Receipt-{}_{}.pdf'.format(datetime.today().strftime('%Y-%m-%d'), order_obj.id))  
            except Exception as err:
                print(err)
                print("Order Obj not exist", id)
        return HttpResponse('embroidery')


