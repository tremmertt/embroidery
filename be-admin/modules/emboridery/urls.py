from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from modules.emboridery.views import order, customer
from modules.emboridery.views.pdf import generate_pdf

urlpatterns = [
    # path("api/customer/", views.NewsList.as_view()),
    path("order/pdf/<str:pk>", generate_pdf.GeneratePDFView.as_view(), name="success"),
    path("api/orders/", order.OrderList.as_view()),
    path("api/orders/<str:pk>", order.OrderDetail.as_view()),
    path("api/orders/<str:pk>/items", order.OrderItemList.as_view()),
    path("api/customers/", customer.CustomerList.as_view()),
    path("api/customers/<str:pk>", customer.CustomerDetail.as_view()),
    # path("news/<int:pk>/recommend", views.RecommendNewsList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
