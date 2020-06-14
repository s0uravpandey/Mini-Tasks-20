from django.db import models
import uuid
from django.contrib.auth.models import User
# Create your models here.
class AccountModel(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4,primary_key=True)
    owner = models.ForeignKey(User, on_delete = models.CASCADE, related_name = 'profile', unique= True)
    email= models.CharField(max_length=80)
    phone= models.CharField(max_length=20)
    name = models.CharField(max_length=100, default = "name")
    about = models.TextField(null= True)



