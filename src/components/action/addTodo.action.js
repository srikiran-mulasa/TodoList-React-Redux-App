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