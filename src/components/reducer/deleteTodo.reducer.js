const InitialState = {
    items: [],
};

const deleteItem = (state, action) => {
    const { payload} = action;
    return {
        ...state,
        items: [...state.items, payload],
    }
}

export function deleteItemReducer(state = InitialState, action) {
    switch(action.type) {
        case 'DELETE_TODO_ITEM': return deleteItem(state, action);
    default: 
        return state;
    }
}