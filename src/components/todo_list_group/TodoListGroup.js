import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../todo_list_item/TodoListItem';

class TodoListGroup extends Component {
  static propTypes = {

  }

  render() {
    return (
      <ul>
        <TodoListItem />
      </ul>
    )
  }
}

export default TodoListGroup
