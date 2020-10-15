from rest_framework import generics


from .models import Todo
from .serializers import TodoSerializer



class TodoListCreateAPIView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer




class TodoDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


# Create your views here.
