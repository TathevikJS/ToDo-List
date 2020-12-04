import React from 'react';
import Todo from './Todo/Todo';
import './Todos.css'
import { useSelector } from 'react-redux';


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
    : <h1>No Todo List</h1>

    return ( 
        <div className='Todos'>
            <div className='TodosCont'>
                {todos}
            </div>
        </div>
     );
}
 
export default Todos;