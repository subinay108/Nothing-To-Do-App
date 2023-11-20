from django.db import models
from time import time
# Create your models here.

# Creating To Do Model
def getTimeStamp():
    return round(time())

class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    last_modified = models.CharField(max_length=10, default=getTimeStamp)
    completed = models.BooleanField(default=False)

    

    def __str__(self):
        return self.title
