import React, { Fragment } from 'react';

const TodoListItem = (props) => {

    const todoList = props.todo.todo.length ? (
        props.todo.todo.map(item => {
            console.log(item);
            return (
                <li key={item.id}>
                    <h4>
                        {item.content}
                    </h4>
                </li>
            )
        })

    ) : (<p>You have no Todo left Today</p>);

    return (
        <Fragment>
            {todoList}
        </Fragment>

    );
}

export default TodoListItem;
