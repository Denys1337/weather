import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {testReducer} from "./reducers/testReducer";

const rootReducer = combineReducers({ 
   testReducer: testReducer,
   
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
})
  
export type Store = ReturnType<typeof rootReducer>;