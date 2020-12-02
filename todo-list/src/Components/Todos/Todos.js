import React from 'react';
import Todo from './Todo';
import './Todos.css'

const Todos = ({data, deleteData, editDataFetch, isEdit}) => {
    const todos = data.length 
    ? data.map(d => {
        console.log(data);
        return (
            <Todo 
            isEdit={isEdit}
                editDataFetch={() => editDataFetch(d._id)}
                deleteData={() => deleteData(d._id)}
                key={d._id}
                title={d.title}
                desc={d.description}
                color={d.color}
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