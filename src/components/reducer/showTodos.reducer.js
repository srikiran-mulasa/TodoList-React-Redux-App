const InitialState = {
    items: [],
};

const showItem = (state, action) => {
    const { payload} = action;
    return {
        ...state,
        items: payload,
    }
}

export function showItemReducer(state = InitialState, action) {
    switch(action.type) {
        case 'SHOW_TODO_ITEM': return showItem(state, action);
    default: 
        return state;
    }
}