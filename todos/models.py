from django.db import models




class Todo(models.Model):
    title = models.CharField(max_length=225)
    is_complete = models.BooleanField(default=False)

    def __str__(self):
        return self.text
