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