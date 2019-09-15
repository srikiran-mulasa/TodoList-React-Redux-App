import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { showTodoList } from '../action/showTodos.action';
import {deleteTodoItem} from '../action/deleteTodo.action';

class TodoListItem extends Component {

    state ={
        allStates:[]
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
    deleteItem = (item) => {
        const { _deleteItem } = this.props;
        _deleteItem(item);
    }

    deleteTodoItem = (e) => {
        const { _deleteItem } = this.props;
        e.preventDefault();
        _deleteItem();

      }
    render() {
        const { allTodoItems } = this.props;

        return (
            <Fragment>
                {
                    allTodoItems.length ? (
                        allTodoItems.map(item => {
                            return (
                                <li key={item.id}>
                                    <span>
                                        {item}
                                    </span>
                                    <button onClick={this.deleteTodoItem}>Delete</button>
                                </li>
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
    }
})

export default connect(mapStoreToProps, mapDispatchToProps)(TodoListItem);
