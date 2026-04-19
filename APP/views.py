from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.contrib import messages

# Create your views here.

def landing(request):
    template = loader.get_template('landing.html')
    return HttpResponse(template.render(request=request))

def join_us(request):
    template = loader.get_template('join_us.html')
    return HttpResponse(template.render(request=request))