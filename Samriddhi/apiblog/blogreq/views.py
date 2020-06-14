from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets,permissions,generics,mixins
from .models import Blogreq
from datetime import datetime
from .serializers import BlogreqSerializer
from django.contrib.auth.models import Group,Permission
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.response import Response
import pytz
from datetime import tzinfo



class BlogViewSet(viewsets.ModelViewSet):
    permission_classes=[
        permissions.IsAuthenticated,
    ]
    serializer_class = BlogreqSerializer

    def get_queryset(self):
        return self.request.user.Blogreq.all()

    def put(self,request,*args,**kwargs):
        return self.update(request,*args,**kwargs)

    def perform_create(self,serializer):
        serializer.save(owner=self.request.user,datetime=datetime.astimezone())

    def delete(self,request,*args,**kwargs):
        return self.destroy(request,*args,**kwargs)
