from django.contrib import admin
from django.urls import path,include
from .import views
from .views import AccountViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('register',AccountViewSet,basename="register")
urlpatterns = router.urls