from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_orders),
    path('add/', views.create_order),
    path('my/', views.my_orders),
    path('deliver/<int:pk>/', views.delivered),
    path('solo/<int:pk>/', views.solo_order),
]