import { todoReducer } from "./todoReducer"
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ // combine all Reducers in one rootReducer // go ../index.js
    todo: todoReducer,
})



export default createStore(rootReducer, applyMiddleware(thunk));
