import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoList } from '../action/addTodo.action';
class TodoForm extends Component {
  state = {
    content: ''
  }

  addTodoList = (item) => {
    const { _addTodoList } = this.props;
    _addTodoList(item);
  }

  handelChange = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

  handelSubmit = (e) => {
    const { content } = this.state
    const { _addTodoList } = this.props;
    e.preventDefault();
    _addTodoList(content);
  }
  render() {
    return (
      <div>
        <form >
          <input type="text" onChange={this.handelChange} value={this.state.content} />
          <button type="submit" onClick={this.handelSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
const mapStoreToProps = (store) => ({
  allTodoItems: store.addTodo.items,
});

const mapDispatchToProps = (dispatch) => ({
  _addTodoList: (item) => {
    dispatch(addTodoList(item))
  }
})

export default connect(mapStoreToProps, mapDispatchToProps)(TodoForm);
