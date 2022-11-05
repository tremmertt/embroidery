import base64
import uuid
from datetime import datetime
from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response

from modules.embroidery.models.sample import Sample
from modules.embroidery.serializers.sample import SampleSerializer
from django.shortcuts import render
from rest_framework import generics, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import get_object_or_404  
from django.core.files.base import ContentFile

class SampleView(APIView):

    def get_file_image(self, base64_image):
        if base64_image:
            try:
                format_file, img_str = base64_image.split(';base64,') 
                ext = format_file.split('/')[-1] 
                return ContentFile(base64.b64decode(img_str), name='{}_{}.{}'.format(datetime.today().strftime('%Y-%m-%d'), uuid.uuid4(), ext)) # You can save this as file instance.
            except Exception as err:
                print(err)
        return base64_image

    def get(self, request, pk=None):
        if pk:
            sample = get_object_or_404(Sample.objects.all(), pk=pk) 
            serializer = SampleSerializer(sample)
            return Response({"sample": serializer.data})
            
        samples = Sample.objects.all()
        serializer = SampleSerializer(samples, many=True)
        return Response({"samples": serializer.data})
    
    def post(self, request):
        sample = request.data.get('sample')
        print('sample',sample)
        sample['image'] = self.get_file_image(sample.get('image', ''))

        # Create an sample from the above data
        serializer = SampleSerializer(data=sample)
        if serializer.is_valid(raise_exception=True):
            sample_saved = serializer.save()
        return Response({"success": "Sample '{}' created successfully".format(sample_saved.id)})

    def put(self, request, pk):
        saved_sample = get_object_or_404(Sample.objects.all(), pk=pk)
        data = request.data.get('sample')
        serializer = SampleSerializer(instance=saved_sample, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            sample_saved = serializer.save()
        return Response({"success": "Sample '{}' updated successfully".format(sample_saved.id)})


    def delete(self, request, pk):
        # Get object with this pk
        sample = get_object_or_404(Sample.objects.all(), pk=pk)
        sample.delete()
        return Response({"message": "Sample with id `{}` has been deleted.".format(pk)},status=204)