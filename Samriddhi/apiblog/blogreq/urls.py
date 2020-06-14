from django.contrib import admin
from django.urls import path,include
from .import views
from .views import BlogViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('blogreq',BlogViewSet,basename="blogreq")
urlpatterns = router.urls