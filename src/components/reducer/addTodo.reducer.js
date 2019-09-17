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

const deleteItem = (state, action) => {
    const { payload } = action;
    const arr = [...state.items];
    arr.splice(payload, 1);
    return {
        ...state, 
        items: arr,
    }
}

const editItem = (state, action) => {
    const { payload } = action;
    const arr = [...state.items];
    arr.splice(payload.index, 1, payload.editedName);
    return {
        ...state, 
        items: arr,  
    }
}


export function addItemReducer(state = InitialState, action) {
    switch (action.type) {
        case 'ADD_TODO_ITEM': return addItem(state, action);
        case 'DELETE_TODO_ITEM': return deleteItem(state, action);
        case 'EDIT_TODO_ITEM': return editItem(state, action);
        default:
            return state;
    }
}