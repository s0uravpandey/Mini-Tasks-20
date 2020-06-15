from django.contrib import admin
from django.urls import path,include
from .import views
from .views import BlogViewSet
from .views import BlogViewList
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('blogreq',BlogViewSet,basename="blogreq")
urlpatterns = router.urls

urlpatterns +=[
    path('itsareq/',views.BlogViewList.as_view()),
]