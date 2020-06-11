import React, {Component} from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render(){
        console.log(this.props.todos)
        return this.props.todos.map((todo) => (
        <Todoitem key = {todo.id} todoitem = {todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo}  />
        ));
    }
}
// PropTypes
Todos.propTypes = {
    todos : PropTypes.array.isRequired
}

export default Todos;
