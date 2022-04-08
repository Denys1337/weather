import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import {testReducer} from "../store/reducers/testReducer"

const rootReducer = combineReducers({ 
    testReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))