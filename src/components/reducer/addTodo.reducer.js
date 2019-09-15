const InitialState = {
    items: [],
};

const addItem = (state, action) => {
    const { payload} = action;
    return {
        ...state,
        items: [...state.items, payload],
    }
}

export function addItemReducer(state = InitialState, action) {
    switch(action.type) {
        case 'ADD_TODO_ITEM': return addItem(state, action);
    default: 
        return state;
    }
}