import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import {testReducer} from "./reducers/testReducer"

const rootReducer = combineReducers({ 
    testReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type Store = ReturnType<typeof rootReducer>;