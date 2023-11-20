from rest_framework import serializers
from todo.models import Todo

# create serializers here
class TodoSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = Todo
        fields = '__all__'
        
