import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, DELETE_ALL_TODO } from '../types'

const initialState = {
    fetchTodo: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, fetchTodo: action.payload }
        case CREATE_TODO:
            return { ...state, fetchTodo: action.payload }
        case DELETE_TODO:
            return { ...state, fetchTodo: action.payload }
        case UPDATE_TODO:
            return { ...state, fetchTodo: action.payload }
        case DELETE_ALL_TODO:
            return { ...state, fetchTodo: action.payload }
        default:
            return state
    }
}