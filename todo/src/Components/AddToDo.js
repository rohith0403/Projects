import React, { Component } from 'react'

export class AddToDo extends Component {
    render() {
        return (
            <form style = {{ display : 'flex'}}>
                <input
                type = "text"
                name = "title"
                style = {{flex : '10', padding : '5px'}}
                placeholder = 'AddTodo'
                />
                <input
                type = "submit"
                value = "submit"
                classname = "btn"
                style = {{flex : '1'}}
                />
            </form>
        )
    }
}

export default AddToDo
