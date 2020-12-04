import { todoReducer } from "./todoReducer"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    todo: todoReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))