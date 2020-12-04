import { CREATE_TODO, GET_TODOS, DELETE_TODO, UPDATE_TODO, OPEN_MODAL, CLOSE_MODAL } from './types'

export async function fetchTodos() {
        try {
          const fetchedData = await fetch('http://todo.eachbase.com/api/TathevikHayrapetyan/todos')
          const data = await fetchedData.json()
          if (data.message) {
            console.log(data.message);
          } else {
            dispatch({ type: GET_TODOS, payload: data })
            setData(data)
            console.log(data);
          }
        } catch (error) {
          console.log(error);
        }
}

export async function createTodo(value) {
    try {
        const fetchSignUp = await fetch('https://todo.eachbase.com/api/TathevikHayrapetyan/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
        })
        const posteddata = await fetchSignUp.json()
        if (posteddata.error) {
        } else {
            dispatch({ type: CREATE_TODO, payload: data })
          console.log(posteddata);
          setData([...data, value])
          handleClose()
        }
      } catch (error) {
      }
    
    }

export async function deleteTodo(id) {
    console.log(id);
    try {
        const deletedData = await fetch(`https://todo.eachbase.com/api/TathevikHayrapetyan/todos/${id}`, {
          method: 'DELETE'
        })
        const delData = await deletedData.json()
        if (delData.message) {
          console.log(delData.message);
        } else {
          dispatch({ type: DELETE_TODO, payload: data })
          const newData = data.filter(d => d._id !== id)
          setData(newData)
        }
      } catch (error) {
        console.log(error);
      }
    }

export async function updateTodo(data, id) {
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


export async function deleteAllTodos () {
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
    setData([])
  }


  
  export const handleOpen = () => {
    setOpen(true)
  }

  export const handleClose = () => {
    setOpen(false)
  }





