import React from 'react'
import Todo from './Todo/Todo'
import { useSelector } from 'react-redux'
import './Todos.css'

const Todos = () => {
    let data = useSelector(state => state.todo.fetchTodo)
    const todos = data.length
        ? data.map(d => {
            return (
                <Todo
                    key={d._id}
                    data={d}
                />
            )
        })
        : <h1 style={{ marginLeft: 10 }}>No Todo List</h1>

    return (
        <div className='Todos'>
            <div className='TodosCont'>
                {todos}
            </div>
        </div>
    )
}

export default Todos