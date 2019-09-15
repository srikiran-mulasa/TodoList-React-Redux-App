import React, { Component } from 'react'
import TodoForm from '../todo_form/TodoForm'
import TodoListGroup from '../todo_list_group/TodoListGroup'

class Main extends Component {


    render() {
        return (
            <div>
                <nav><h4>Todo List</h4></nav>
                <TodoForm />
                <TodoListGroup />
            </div>
        )
    }
}

export default Main
