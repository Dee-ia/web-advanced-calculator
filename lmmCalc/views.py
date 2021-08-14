from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.

def index(request):
  return render(request, 'lmmCalc/index.html')


def answer(request):
  print(request.POST)

  return render(request, 'lmmCalc/result.html', {'test': 'testing 1 2 3'})