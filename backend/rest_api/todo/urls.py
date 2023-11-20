from django.urls import path, include
from todo.views import TodoViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todos', TodoViewSet)

urlpatterns = [
    path('', include(router.urls))
]
