from django.db import models
import uuid
from datetime import datetime

# Create your models here.
class Blogreq(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4,primary_key=True)
    blog_name= models.CharField(max_length=80)
    email= models.CharField(max_length=80)
    username= models.CharField(max_length=80)
    status= models.BooleanField(default=False)
    date_rec=models.DateTimeField(auto_now=True,null=True)
