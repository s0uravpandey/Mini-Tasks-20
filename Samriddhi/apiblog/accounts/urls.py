from django.contrib import admin
from django.urls import path,include
from .import views

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
    path('signup/',views.RegistrationView.as_view()),
    path('login/',views.ProfileView.as_view())
]