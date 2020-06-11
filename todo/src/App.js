import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import Header from './Components/Header';
import AddToDo from './Components/AddToDo';
class App extends Component {
  state = {
    todos : [
      {
        id : 1,
        title : 'Work more hours',
        completed : false
      },
      {
        id : 2,
        title : 'Work out',
        completed : false
      },
      {
      id : 3,
      title : 'Sleep',
      completed : false
      }
    ]
  }
  // Toggle Complete
  markComplete = (id) =>{
    this.setState({ todos : this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }
// deleting Todos
  delTodo = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        <AddToDo />
        <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
      </div>
    );  
  }
}

export default App;
