from django.urls import path


from .views import TodoListCreateAPIView, TodoDetailAPIView


app_name = 'todos'


urlpatterns = [
    path('<int:pk>/', TodoDetailAPIView.as_view(), name="todo_detail"),
    path('', TodoListCreateAPIView.as_view(), name="todo_list"),
]
