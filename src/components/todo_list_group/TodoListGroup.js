import React from 'react';
import TodoListItem from '../todo_list_item/TodoListItem';

const TodoListGroup = (props) => {
    return (
        <ul>
            <TodoListItem todo={props}/>
        </ul>
    )
}

export default TodoListGroup
