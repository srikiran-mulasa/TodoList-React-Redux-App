import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoForm from '../todo_form/TodoForm'
import TodoListGroup from '../todo_list_group/TodoListGroup'

class Main extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <TodoForm />
                <TodoListGroup />
            </div>
        )
    }
}

export default Main
