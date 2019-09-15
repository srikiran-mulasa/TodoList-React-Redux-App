//  Action - type & payload
function showItem(item) {
    return {
        type: 'SHOW_TODO_ITEM',
        payload: item,
    }
}

// Add To Cart - Action Creator
export const showTodoList = (item) => {
    return (dispatch => {
        dispatch(showItem(item));
    })
}