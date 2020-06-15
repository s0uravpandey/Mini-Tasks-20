from rest_framework import serializers 
from .models import Blogreq

class BlogreqSerializer(serializers.ModelSerializer):
    class Meta:
        model= Blogreq
        fields= '__all__'
        read_only_fields= ('date_rec',)  