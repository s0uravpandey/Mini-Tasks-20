from django.db import models
import uuid
from django.contrib.auth.models import User
# Create your models here.
class AccountModel(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4,primary_key=True)
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    username= models.CharField(max_length=50)
    email= models.CharField(max_length=80)
    phone= models.CharField(max_length=20)



