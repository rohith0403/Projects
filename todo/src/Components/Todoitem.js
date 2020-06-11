import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            backgroundColor : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration : this.props.todoitem.completed ? 'line-through' : 'none'            
        }
    }
    
    render() {
        const {id, title} = this.props.todoitem;
        return (
            <div style = {this.getStyle()}>
                <p> 
                    <input type = "checkbox" onChange = {this.props.markComplete.bind(this, id)} /> {' '}
                    {title} 
                    <button onClick = {this.props.delTodo.bind(this, id)} style = {btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// PropTypes
Todoitem.propTypes = {
    todoitem : PropTypes.object.isRequired
}

// Style
// const itemSytle = {
//     backgroundColor : '#f4f4f4'
// }
const btnStyle = {
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 9px',
    borderRadius : '5px',
    cursor : 'pointer',
    float : 'right'
}
export default Todoitem
