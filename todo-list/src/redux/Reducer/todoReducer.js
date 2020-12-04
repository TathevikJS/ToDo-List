import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, DELETE_All_TODO, OPEN_MODAL, CLOSE_MODAL } from '../types'

const initialState = {
    fetchTodo: [],
    fetchSingleTodo: {},
    open: false
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return { ...state, fetchTodo: action.payload }
        case CREATE_TODO:
            return { ...state, fetchTodo: [...state, action.payload] }
        case DELETE_TODO:
            return { ...state, fetchTodo: action.payload }
        case UPDATE_TODO:
            return { ...state, fetchTodo: action.payload }
        case DELETE_ALL_TODO:
            return { ...state, fetchTodo: action.payload }
        case OPEN_MODAL:
            return { ...state, open: action.payload }
        case CLOSE_MODAL:
            return { ...state, open: action.payload }
        default:
            return state
    }
}