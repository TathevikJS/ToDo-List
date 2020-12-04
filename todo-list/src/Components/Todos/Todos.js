import React from 'react';
import Todo from './Todo';
import './Todos.css'

const Todos = ({data, deleteData, editDataFetch}) => {
    const todos = data.length 
    ? data.map(d => {
        console.log(data);
        return (
            <Todo 
                editDataFetch={editDataFetch}
                deleteData={deleteData}
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