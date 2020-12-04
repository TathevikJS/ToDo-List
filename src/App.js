import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTodos } from './redux/action'
import Add from './Components/Add/Add'
import AddPost from './Components/Add/AddPost/AddPost'
import Todos from './Components/Todos/Todos'
import SimpleModal from './UI/Modal/Modal'
import './App.css'


function App() {

    let dispatch = useDispatch()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    const body = <AddPost handleOpen={handleOpen} />

    return (
        <div className="App">
            <Add handleOpen={handleOpen} />
            <Todos />
            <SimpleModal
                body={body}
                open={open}
                handleClose={handleClose}
            />
        </div>
    )
}

export default App