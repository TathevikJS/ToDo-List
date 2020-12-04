import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, OPEN_MODAL, CLOSE_MODAL } from '../types.js'

const initialState = {
    fetchTodo: [],
    fetchSingleTodo: {},
    open: false
}

export const todoReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_TODOS:
            return {...state, fetchTodo: action.payload}
        case CREATE_TODO:
            return {...state, fetchTodo: state.fetchTodo.concat(action.payload)}
        case DELETE_TODO:
            return {...state}
        case UPDATE_TODO:
            return {...state}
        case OPEN_MODAL:
            return {...state}
        case CLOSE_MODAL:
            return {...state}
        default:
            return state
    }
}