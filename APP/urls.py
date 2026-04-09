from django.urls import path
from . import views
from APP.views import landing as LANDING

urlpatterns = [
    path('', LANDING, name='landing')
]