import React from 'react';


function TodoList(props){
  console.log(props);
const todos = props.todos.map(todo => <li key={todo.id}><p>{todo.title}</p><button onClick={() => props.removeTodo(todo.id)}>Remove</button></li>)
return (
  <React.Fragment>
  <div className="col-12 col-md-6 mb-5">{todos}</div>

  </React.Fragment>

  )
}

















export default TodoList;
