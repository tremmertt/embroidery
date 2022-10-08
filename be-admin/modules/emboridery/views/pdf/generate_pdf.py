from django.views.generic import FormView, TemplateView
from django.urls import reverse_lazy
from modules.emboridery.models import order

class GeneratePDFView(TemplateView):

    def create_report(self, order_obj):
        import io
        from reportlab.pdfgen import canvas

        # Create a file-like buffer to receive PDF data.
        buffer = io.BytesIO()
        # FileResponse sets the Content-Disposition header so that browsers
        

        # Create the PDF object, using the buffer as its "file."
        p = canvas.Canvas(buffer)

        # Draw things on the PDF. Here's where the PDF generation happens.
        # See the ReportLab documentation for the full list of functionality.
        p.drawString(100, 100, "Hello world.")

        # Close the PDF object cleanly, and we're done.
        p.showPage()
        p.save()

        # present the option to save the file.
        buffer.seek(0) 

        return buffer


    def get(self, request, *args, **kwargs): 
        from django.http import FileResponse, HttpResponse
        from django.urls import reverse
        from django.shortcuts import redirect

        id = kwargs.get('pk') 
        if id:
            try:
                order_obj = order.Order.objects.get(id=id)
                print(order_obj)
                buffer = self.create_report(order_obj)
                return FileResponse(buffer, as_attachment=True, filename='hello.pdf')  
            except:
                print("Order Obj not exist", id)
        return redirect(reverse('/', kwargs={'args_1':1}))


