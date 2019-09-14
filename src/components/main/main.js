import React, { Component } from 'react'
import TodoForm from '../todo_form/TodoForm'
import TodoListGroup from '../todo_list_group/TodoListGroup'

class Main extends Component {

    state = {
        todos: [
            { id: 1, content: "bring milk" },
            { id: 2, content: "wash cloths" },
        ]
    }

    addTodo = (todo) => {
        todo.id= Math.random();
        let todos =[...this.state.todos, todo];
        this.setState({
            todos:todos
        })
    }

    render() {
        return (
            <div>
                <nav><h4>Todo List</h4></nav>
                <TodoForm  addTodo={this.addTodo}/>
                <TodoListGroup todo={this.state.todos} />
            </div>
        )
    }
}

export default Main
