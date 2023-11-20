from django.shortcuts import render
from rest_framework import viewsets
from todo.models import Todo
from todo.serializers import TodoSerializer


# Create your views here.
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
