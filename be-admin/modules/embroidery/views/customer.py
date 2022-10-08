from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response

from modules.embroidery.models.customer import Customer
from modules.embroidery.serializers.customer import CustomerSerializer
from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404  

class CustomerView(APIView):
    def get(self, request, pk=None):
        if pk:
            customer = get_object_or_404(Customer.objects.all(), pk=pk) 
            serializer = CustomerSerializer(customer)
            return Response({"customer": serializer.data})
            
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        return Response({"customers": serializer.data})
    
    def post(self, request):
        customer = request.data.get('customer')

        # Create an customer from the above data
        serializer = CustomerSerializer(data=customer)
        if serializer.is_valid(raise_exception=True):
            customer_saved = serializer.save()
        return Response({"success": "Customer '{}' created successfully".format(customer_saved.id)})

    def put(self, request, pk):
        saved_customer = get_object_or_404(Customer.objects.all(), pk=pk)
        data = request.data.get('customer')
        serializer = CustomerSerializer(instance=saved_customer, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            customer_saved = serializer.save()
        return Response({"success": "Customer '{}' updated successfully".format(customer_saved.id)})


    def delete(self, request, pk):
        # Get object with this pk
        customer = get_object_or_404(Customer.objects.all(), pk=pk)
        customer.delete()
        return Response({"message": "Customer with id `{}` has been deleted.".format(pk)},status=204)