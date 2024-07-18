# frontend/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),  # Define una vista que maneje la carga inicial de tu aplicación React
    # Aquí puedes definir otras rutas necesarias para tu aplicación React
]



