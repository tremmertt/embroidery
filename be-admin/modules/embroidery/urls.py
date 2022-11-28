from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from modules.embroidery.views import order, customer, sample
from modules.embroidery.views.login import LoginView
from modules.embroidery.views.signup import SignUpiew
from modules.embroidery.views.pdf import generate_pdf

urlpatterns = [
    path("order/pdf/<str:pk>", generate_pdf.GeneratePDFView.as_view(), name="success"),
    
    path("api/orders/", order.OrderView.as_view()),
    path("api/orders/<str:pk>", order.OrderView.as_view()), 

    path("api/customers/", customer.CustomerView.as_view()),
    path("api/customers/<str:pk>", customer.CustomerView.as_view()),

    path("api/samples/", sample.SampleView.as_view()),
    path("api/samples/<str:pk>", sample.SampleView.as_view()),
    
    path("api/login/<str:media>", LoginView.as_view()),
    path("api/signup/<str:media>", SignUpiew.as_view()),
    
]

urlpatterns = format_suffix_patterns(urlpatterns)
