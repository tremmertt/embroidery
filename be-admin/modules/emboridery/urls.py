from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from modules.emboridery.views import order, customer

urlpatterns = [
    # path("api/customer/", views.NewsList.as_view()),
    path("orders/", order.OrderList.as_view()),
    path("orders/<str:pk>", order.OrderDetail.as_view()),
    path("orders/<str:pk>/items", order.OrderItemList.as_view()),
    path("customers/", customer.CustomerList.as_view()),
    path("customers/<str:pk>", customer.CustomerDetail.as_view()),
    # path("news/<int:pk>/", views.NewsDetail.as_view()),
    # path("news/<int:pk>/recommend", views.RecommendNewsList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
