import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    content: ''
  }
  handelChange = (e) => {
    this.setState({
      content: e.target.value,
    })
  }
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content:'',
    }) 
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelChange}  value={this.state.content}/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
