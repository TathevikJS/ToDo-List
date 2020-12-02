import React from 'react';
import './Todo.css';

import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/remove.png'


const Todo = ({ title, desc, color, deleteData, editDataFetch, isEdit }) => {

    console.log(isEdit);

    const r = Math.floor(Math.random() * 100)
    const n = Math.floor(Math.random() * 10)
    const rand = Math.floor(Math.random() * r) / n > 5 ? 'rotateRight' : 'rotateLeft'

    return (
        <div className={['Todo', rand].join(' ')} >
            <div style={{ width: '100%', height: '100%', backgroundColor: color, padding: '10px' }}>
                <div className='Header'>
                    <div className='Title'>
                        {isEdit ? <input value={title} onChange={(e) => e.target.value}/> :  <p style={{fontSize: '30px'}}><b>{title}</b></p>}
                    </div>
                    <div className='IconsCont'>
                        <img src={editIcon} alt='' width='40%' height='80%'  onClick={editDataFetch}/>
                        <img src={deleteIcon} alt='' width='40%' height='80%' onClick={deleteData} />
                    </div>
                </div>
                <div className='Desc'>
                    {isEdit ? <input value={desc} onChange={(e) => e.target.value}/> : <p style={{padding: 15}}>{desc}</p>}
                </div>
            </div>
        </div>
    );
}

export default Todo;