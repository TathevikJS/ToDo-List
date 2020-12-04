import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, DELETE_ALL_TODO } from './types'

export const fetchTodos = () => async (dispatch) => {

  try {
    const fetchedData = await fetch('http://todo.eachbase.com/api/TathevikHayrapetyan/todos')
    const data = await fetchedData.json()
    if (data.message) {
      console.log(data.message);
    } else {
      dispatch({ type: GET_TODOS, payload: data })
    }
  } catch (error) {
    console.log(error);
  }
}

export const createTodo = (value) => async (dispatch, getState) => {
  const data = getState().todo.fetchTodo
  console.log(data);
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
    } else {
      let newData = [...data, value]
      dispatch({ type: CREATE_TODO, payload: newData })
    }
  } catch (error) {
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
      console.log(delData.message);
    } else {
       const newData = data.filter(d => d._id !== id)
      dispatch({ type: DELETE_TODO, payload: newData })
      //setData(newData)
    }
  } catch (error) {
    console.log(error);
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
      console.log(editedData.message);
    } else {
      dispatch({ type: UPDATE_TODO, payload: data })
      console.log(editedData);
    }
  } catch (error) {
  }

}

export const deleteAllTodos = () => async (dispatch, getState) => {
  const data = getState().todo.fetchTodo
  Promise.all(data.map(async (d) => {
    console.log(d._id);
    try {
      const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${d._id}`, {
        method: 'DELETE'
      })
      const delData = await deletedData.json()
      if (delData.message) {
        console.log(delData.message);
      } else {
        console.log(delData);
      }
    } catch (error) {
      console.log(error);
    }
  }))
  dispatch({ type: DELETE_ALL_TODO, payload: [] })
}








