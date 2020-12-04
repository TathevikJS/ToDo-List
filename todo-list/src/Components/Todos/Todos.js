import React from 'react';
import Todo from './Todo/Todo';
import './Todos.css'
import { deleteTodo, updateTodo } from '../../redux/action';


const Todos = ({data}) => {
    const todos = data.length 
    ? data.map(d => {
        console.log(data);
        return (
            <Todo 
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
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