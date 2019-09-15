const InitialState = {
    items: [],
};

const addItem = (state, action) => {
    const { payload } = action;
    return {
        ...state,
        items: [...state.items, payload],
    }
}

export function addItemReducer(state = InitialState, action) {
    switch (action.type) {
        case 'ADD_TODO_ITEM': return addItem(state, action);
        case 'DELETE_TODO_ITEM': return deleteItem(state, action);
        default:
            return state;
    }
}

const deleteItem = (state, action) => {
    const { payload } = action;
    const arr = [...state.items];
    arr.splice(payload, 1);
    return {
        ...state, 
        items: arr,
    }
}
