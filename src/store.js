import { createStore, combineReducers, applyMiddleware } from 'redux';
import { showItemReducer } from './components/reducer/showTodos.reducer';
import { addItemReducer } from './components/reducer/addTodo.reducer';
import { deleteItemReducer } from './components/reducer/deleteTodo.reducer';


import thunk from 'redux-thunk';
// Redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const rootReducers = combineReducers({
    showTodo: showItemReducer,
    addTodo: addItemReducer,
    deleteTodo:deleteItemReducer

});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;