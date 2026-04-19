from django.urls import path
from . import views
from APP.views import landing as LANDING
from APP.views import join_us as JOIN_US

urlpatterns = [
    path('', LANDING, name='landing'),
    path('home', LANDING, name="landing"),
    path('join_the_cluster', JOIN_US, name='join_the_cluster')
]