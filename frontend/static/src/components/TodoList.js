import React from 'react';


function TodoList(props){
const todos = props.todos.map(todos => <li key={todos.id} >{todos.title}</li>)
return (
  <React.Fragment>
  <div className="col-12 col-md-6 mb-5">{todos}</div>
  </React.Fragment>

  )
}

















export default TodoList;
