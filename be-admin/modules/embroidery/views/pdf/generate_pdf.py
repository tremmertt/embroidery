from django.views.generic import FormView, TemplateView
from django.urls import reverse_lazy
from modules.embroidery.models import order
from datetime import datetime
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_LEFT, TA_RIGHT
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet, LineStyle
from reportlab.lib.units import inch
from reportlab.lib.pagesizes import letter
from reportlab.graphics.shapes import Drawing, Line
from reportlab.lib import colors
from decimal import Decimal
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
import reportlab.rl_config
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
reportlab.rl_config.warnOnMissingFontGlyphs = 0


class GeneratePDFView(TemplateView):

    STORE_NAME = 'Embroidery Digitizing'
    # ADDRESS_EN = u'263 Ngô Gia Tự, Phường 2 Quận 10, TP Hồ Chí Minh'.encode('utf8')
    ADDRESS_EN = '263 Ngo Gia Tu, Ward 2 Distric 10, Ho Chi Minh city'
    PHONE = '(+84) 44 444 3455'
    UNIT_PRICE = "$"
    GREETING = "Thank you for your trust"
    SOLOGAN = "Let us turn your ideas into reality !!!"
    
    def __init__(self):
        self.register_font()
        print("Register font successfully")
    
    def register_font(self):

        import os
        import sys
        file_dir = os.path.dirname(os.path.realpath(__file__))
        root_dir = os.path.abspath(file_dir + '/..') 

        pdfmetrics.registerFont(TTFont('RobotoBlack', os.path.join(file_dir,'fonts/Roboto-Black.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoBlackItalic', os.path.join(file_dir,'fonts/Roboto-BlackItalic.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoBold', os.path.join(file_dir,'fonts/Roboto-Bold.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoBoldItalic', os.path.join(file_dir,'fonts/Roboto-BoldItalic.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoItalic', os.path.join(file_dir,'fonts/Roboto-Italic.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoLight', os.path.join(file_dir,'fonts/Roboto-Light.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoLightItalic', os.path.join(file_dir,'fonts/Roboto-LightItalic.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoMedium', os.path.join(file_dir,'fonts/Roboto-Medium.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoMediumItalic', os.path.join(file_dir,'fonts/Roboto-MediumItalic.ttf')))
        pdfmetrics.registerFont(TTFont('Roboto', os.path.join(file_dir,'fonts/Roboto-Regular.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoThin', os.path.join(file_dir,'fonts/Roboto-Thin.ttf')))
        pdfmetrics.registerFont(TTFont('RobotoThinItalic', os.path.join(file_dir,'fonts/Roboto-ThinItalic.ttf')))

        registerFontFamily('Roboto',normal='Roboto',bold='RobotoBold',italic='RobotoItalic',boldItalic='RobotoBoldItalic')

    def get_line(self):
        d = Drawing(400, 0.5)
        d.add(Line(195, 1, 380, 0.5))
        return d

    def add_title(self, doc, order_obj):
        doc.append(Image('static/admin/simpleui-x/img/logo.png', 1.5*inch, 1.5*inch))
        doc.append(Spacer(1, 20))
        doc.append(Paragraph(self.STORE_NAME, ParagraphStyle(fontFamily='Roboto',
                                                                name='Title', 
                                                                fontSize=20, alignment=TA_CENTER)))
        doc.append(Spacer(1, 18))
        doc.append(Paragraph(self.ADDRESS_EN, ParagraphStyle(fontFamily='Roboto',
                                                                name='Address', 
                                                                fontSize=10, alignment=TA_CENTER)))
        doc.append(Spacer(1, 4))
        doc.append(Paragraph(self.PHONE, ParagraphStyle(fontFamily='Roboto',
                                                                name='Phone', 
                                                                fontSize=10, alignment=TA_CENTER)))
        doc.append(Spacer(1, 10))
        doc.append(Paragraph("- {} -".format(order_obj.name), ParagraphStyle(fontFamily='Roboto',
                                                                name='Receipt', 
                                                                fontSize=14, alignment=TA_CENTER)))
        doc.append(Spacer(1, 15)) 
        doc.append(self.get_line())
        doc.append(Spacer(1, 10))

        return doc  

    def add_footer(self, doc):
        
        doc.append(Spacer(1, 20))
        doc.append(Paragraph(self.GREETING, ParagraphStyle(fontFamily='Roboto',
                                                                name='Title', 
                                                                fontSize=10, alignment=TA_CENTER)))
        doc.append(Spacer(1, 4)) 
        doc.append(Paragraph(self.SOLOGAN, ParagraphStyle(fontFamily='Roboto',
                                                                name='Title', 
                                                                fontSize=10, alignment=TA_CENTER)))
        doc.append(Image('static/admin/simpleui-x/img/logo.png', 0.5*inch, 0.5*inch))

        return doc                                                                    

    def add_detail_item_order(self, doc, order_obj): 
        has_tax = True
        tax_percent = 0.1

        from modules.embroidery.models.item import Item

        list_item_of_order = Item.objects.filter(order__id=order_obj.id)
        if list_item_of_order and len(list_item_of_order) != 0: 
            line_addition = 3 if has_tax else 2
            max_data_columns = 5
            max_data_rows = len(list_item_of_order)
            styles = TableStyle([ 
                ('FONTNAME', (0,0), (5,0), 'RobotoBold'), 
                ('FONTNAME', (1,1), (max_data_columns, max_data_rows), 'Roboto'),
                ('ALIGN', (0,0), (max_data_columns, max_data_rows), "CENTER"),
                ('FONTSIZE', (0,0), (-1, -1), 10), 


                ('BOTTOMPADDING', (0,max_data_rows), (max_data_columns, max_data_rows), 5),
                ('TOPPADDING', (0,max_data_rows+1), (max_data_columns+1, max_data_rows+1), 5),

                # Sub total and tax
                ('LINEABOVE', (0,max_data_rows+1), (max_data_columns+1, max_data_rows+1), 0.5, colors.black),
                ('ALIGN', (0,max_data_rows), (max_data_columns+line_addition, max_data_rows+line_addition), "CENTER"),

                # Total
                ('LINEABOVE', (0,max_data_rows+line_addition), (max_data_columns+1, max_data_rows+line_addition), 0.6, colors.black),
                ('BOTTOMPADDING', (0,max_data_rows+line_addition-1), (max_data_columns+1, max_data_rows+line_addition-1), 5),
                ('TOPPADDING', (0,max_data_rows+line_addition),  (max_data_columns+1, max_data_rows+line_addition), 5),
                
                ('FONTNAME', (0,max_data_rows+line_addition),  (max_data_columns, max_data_columns+line_addition), 'RobotoBold'),
                ('FONTNAME', (max_data_columns,max_data_rows+1),  (max_data_columns, max_data_columns+line_addition), 'RobotoBold'),
                
                ('FONTSIZE', (0,max_data_rows+line_addition),  (max_data_columns, max_data_columns+line_addition), 14),
            ])
            data_rows = [
                ['Name', 'H·W·L', 'Format', 'Quantity', 'Unit Price', 'Sub ({})'.format(self.UNIT_PRICE)]
            ]
            total_quantity = 0
            sub_total_price = 0
            total_price = 0
            for item in list_item_of_order:
                total_quantity += item.quantity
                sub_total = item.quantity * item.unit_price
                sub_total_price += sub_total
                data_rows.append([item.name, "{}·{}·{}".format(item.height, item.width, item.length), item.output_format, item.quantity, item.unit_price, sub_total])

            tax = 0
            if has_tax:
                tax = round(Decimal(tax_percent) * sub_total_price, 2)
                data_rows.extend([
                    ['Sub Total:', '', '', total_quantity, '', sub_total_price],
                    ['Tax:', '', '', '', '', "{:.2f}".format(tax)]
                ])
            else:
                data_rows.extend([
                    ['Sub Total:', '', '', total_quantity, '', sub_total_price],
                ])
            
            total_price = sub_total_price + tax if has_tax else sub_total_price
            data_rows.extend([
                ['Total:', '', '', '', '', total_price],
            ])

            t = Table(data_rows, style=styles)
            doc.append(t) 
            doc.append(Spacer(1, 10 * len(list_item_of_order)))

        return doc

    def add_info_common_order(self, doc, order_obj): 
        styles = TableStyle([
            ('FONTSIZE', (0,0), (-1, -1), 10),
            ('ALIGN', (0, 0), (0, 5), "LEFT"),
            ('ALIGN', (1, 0), (5, 5), "RIGHT"),
        ])

        order_date = order_obj.created_at.strftime('%H:%M:%S %d-%m-%Y')
        start_date = order_obj.start_time.strftime('%d-%m-%Y') if order_obj.start_time else order_obj.start_time
        finish_date = order_obj.end_time.strftime('%d-%m-%Y') if order_obj.end_time else order_obj.end_time
        
        data = [
            ['Order Date:', order_date],
            ['Start Date:', start_date],
            ['Finish Date:', finish_date],
            ['Customer Name:', order_obj.customer.name if order_obj.customer else "Customer Default"],
            ['Assignee Name:', order_obj.assignee.username if order_obj.assignee else "Admin Default"],
        ]
        t = Table(data, style=styles)
        doc.append(t)
        doc.append(Spacer(1, 15))
        doc.append(self.get_line())
        doc.append(Spacer(1, 10))
        return doc

    def create_report(self, order_obj):
        import io
        from reportlab.pdfgen import canvas
        buffer = io.BytesIO()
        try:
            print('order_obj',order_obj)
            document = []
            self.add_title(document, order_obj)
            self.add_info_common_order(document, order_obj)
            self.add_detail_item_order(document, order_obj)
            self.add_footer(document)

            receipt_pdf = SimpleDocTemplate(buffer, pagesize=letter,
                                rightMargin=12, leftMargin=12,
                                topMargin=12, bottomMargin=12)
            receipt_pdf.build(document)

                    
        except Exception as err:
            print(err) 
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
                buffer = self.create_report(order_obj)
                return FileResponse(buffer, as_attachment=True, filename='Receipt-{}_{}.pdf'.format(datetime.today().strftime('%Y-%m-%d'), order_obj.id))  
            except Exception as err:
                print(err)
                print("Order Obj not exist", id)
        return HttpResponse('embroidery')


