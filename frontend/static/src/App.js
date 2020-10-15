import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/')
        .then(response => response.json())
        .then(data => this.setState({ todos: data }))
        .catch(error => console.log('Error:', error));

      }

  removeTodo(id) {
    fetch(`/api/v1/${id}/`, {
      method: 'DELETE',
    })
    .then(res => res)
    // .then(res => console.log(res))
    // .then(data => this.setState({todos:data}))
    // .catch(error => console.log('Error:', error))
  }

    handleSubmit(event, data) {
          console.log('here')
          event.preventDefault();
          fetch('/api/v1/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then(response => response.json())
          .then(data => console.log(data));
        }

  render() {
      return (
        <div >
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
        <TodoForm handleSubmit={this.handleSubmit}/>
        </div>
      );
    }


}


export default App;
