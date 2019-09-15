//  Action - type & payload
function addItem(item) {
    return {
        type: 'ADD_TODO_ITEM',
        payload: item,
    }
}

// Add To Cart - Action Creator
export const addTodoList = (item) => {
    return (dispatch => {
        dispatch(addItem(item));
    })
}

//  Action - type & payload
function deleteItem(item) {
    return {
        type: 'DELETE_TODO_ITEM',
        payload: item,
    }
}

// Add To Cart - Action Creator
export const deleteTodoItem = (item) => {
    return (dispatch => {
        dispatch(deleteItem(item));
    })
}