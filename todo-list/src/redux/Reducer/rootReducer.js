import { todoReducer } from "./todoReducer"
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ // combine all Reducers in one rootReducer // go ../index.js
    todoReducer,
})


