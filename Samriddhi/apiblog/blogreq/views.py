from rest_framework import viewsets,permissions
from rest_framework import generics
from .models import Blogreq
from rest_framework.views import APIView
from datetime import datetime
from .serializers import BlogreqSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import pytz
from datetime import tzinfo
from django.contrib.auth.models import Permission

class BlogViewSet(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated,
    ]
    serializer_class = BlogreqSerializer

    def get_queryset(self):
        queryset = Blogreq.objects.all()
        return queryset

    def put(self,request,*args,**kwargs):
        return self.update(request,*args,**kwargs)

    def perform_create(self,serializer):
        serializer.save(date_rec=datetime.now())  

    def delete(self,request,*args,**kwargs):
        return self.destroy(request,*args,**kwargs)  

class BlogViewList(generics.ListAPIView):
    queryset = Blogreq.objects.all()
    serializer_class= BlogreqSerializer