import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { showTodoList } from '../action/showTodos.action';
import { deleteTodoItem } from '../action/addTodo.action';
import { editTodoItem } from '../action/addTodo.action';


class TodoListItem extends Component {

    state = {
        allStates: [],
        editedIndex: null,
        editedName: '',
    }

    // componentDidMount() {
    //     fetch('https://restcountries.eu/rest/v2/all')
    //         .then(result => { return result.json() })
    //         .then(res => console.log(res));


    // }

    showTodoList = (item) => {
        const { _showTodoList } = this.props;
        _showTodoList(item);
    }

    deleteTodoItem = (e, item) => {
        const { _deleteItem } = this.props;
        _deleteItem(item);
    }

    editTodoItem = (e, index) => {
        const { _editItem } = this.props;
        const { editedName } = this.state;
        this.setState({
            editedIndex: index,
        })
        const item = {
            index,
            editedName
        }

        _editItem(item);
    }

    handleEditInput = (e) => {
        this.setState({
            editedName: e.target.value,
        })
    }

    render() {
        const { allTodoItems } = this.props;
        const { editedIndex, editedName } = this.state;
        return (
            <Fragment>
                {
                    allTodoItems.length > 0 ? (
                        allTodoItems.map((item, index) => {
                            return (
                                <div key={index}>
                                    {editedIndex === index ? <input type="text" value={editedName} onChange={this.handleEditInput} /> : item}
                                    <button onClick={(e) => this.deleteTodoItem(e, index)}>Delete</button>
                                    <button onClick={(e) => this.editTodoItem(e, index)}>{editedIndex === index ? 'save' : 'edit'}</button>
                                </div>
                            )
                        })

                    ) : (<p>You have no Todo left Today</p>)

                }
            </Fragment>

        )
    }
}

const mapStoreToProps = (store) => ({
    allTodoItems: store.addTodo.items,
});

const mapDispatchToProps = (dispatch) => ({
    _showTodoList: (item) => {
        dispatch(showTodoList(item))
    },
    _deleteItem: (item) => {
        dispatch(deleteTodoItem(item))
    },
    _editItem: (item) => {
        dispatch(editTodoItem(item))
    }
})

export default connect(mapStoreToProps, mapDispatchToProps)(TodoListItem);
