import { createStore, combineReducers, applyMiddleware } from 'redux';
import { addItemReducer } from './components/reducer/addTodo.reducer';


import thunk from 'redux-thunk';
// Redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const rootReducers = combineReducers({
    addTodo: addItemReducer,

});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;