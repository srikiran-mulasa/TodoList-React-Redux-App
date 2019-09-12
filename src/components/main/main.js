import React, { Component } from 'react'
import TodoForm from '../todo_form/TodoForm'
import TodoListGroup from '../todo_list_group/TodoListGroup'

class Main extends Component {

    state = {
        todo: [
            { id: 1, content: "bring milk" },
            { id: 2, content: "wash cloths" },
        ]
    }

    render() {
        return (
            <div>
                <nav><h4>Todo List</h4></nav>
                <TodoForm />
                <TodoListGroup todo={this.state.todo}/>
            </div>
        )
    }
}

export default Main
