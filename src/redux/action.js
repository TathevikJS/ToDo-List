import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, DELETE_ALL_TODO } from './types'

export const fetchTodos = () => async (dispatch) => {

    try {
        const fetchedData = await fetch('http://todo.eachbase.com/api/TathevikHayrapetyan/todos')
        const data = await fetchedData.json()
        if (data.message) {
            throw new Error(data.message)
        } else {
            dispatch({ type: GET_TODOS, payload: data })
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const createTodo = (value) => async (dispatch, getState) => {
    const data = getState().todo.fetchTodo
    try {
        const postFetch = await fetch('https://todo.eachbase.com/api/TathevikHayrapetyan/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        const posteddata = await postFetch.json()
        if (posteddata.error) {
            throw new Error(posteddata.error)
        } else {
            let newData = [...data, posteddata]
            dispatch({ type: CREATE_TODO, payload: newData })
        }
    } catch (error) {
        throw new Error(error)
    }

}
export const deleteTodo = (id) => async (dispatch, getState) => {
    const data = getState().todo.fetchTodo
    try {
        const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
            method: 'DELETE'
        })
        const delData = await deletedData.json()
        if (delData.message) {
            throw new Error(delData.message)
        } else {
            const newData = data.filter(d => d._id !== id)
            dispatch({ type: DELETE_TODO, payload: newData })
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTodo = (value, id) => async (dispatch, getState) => {
    const data = getState().todo.fetchTodo
    try {
        const editData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        const editedData = await editData.json()
        if (editedData.message) {
            throw new Error(editedData.message)
        } else {
            dispatch({ type: UPDATE_TODO, payload: data })
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteAllTodos = () => async (dispatch, getState) => {
    const data = getState().todo.fetchTodo
    Promise.all(data.map(async (d) => {
        try {
            const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${d._id}`, {
                method: 'DELETE'
            })
            const delData = await deletedData.json()
            if (delData.message) {
                throw new Error(delData.message)
            }
        } catch (error) {
            throw new Error(error)
        }
    }))
    dispatch({ type: DELETE_ALL_TODO, payload: [] })
}