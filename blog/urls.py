from django.urls import path
from . import views

urlpatterns = [
    path('', views.base, name='asdf'),
    path('zlp/<int:pk>/', views.post_list, name='asdf'),
]