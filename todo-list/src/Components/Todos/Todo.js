import React, {useState} from 'react';
import './Todo.css';

import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/remove.png'
import done from '../../assets/tick.png'



const Todo = ({ data, deleteData, editDataFetch }) => {

    const r = Math.floor(Math.random() * 100)
    const n = Math.floor(Math.random() * 10)
    const rand = Math.floor(Math.random() * r) / n > 5 ? 'rotateRight' : 'rotateLeft'
    
    const [isEdit, setIsEdit] = React.useState(false)

        const [title, setTitle] = useState(data.title)
        const [description, setDesc] = useState(data.description)
        const [color, setColor] = useState(data.color)


        const update= () => {
            editDataFetch({color, title, description}, data._id)
            setIsEdit(!isEdit)
        }
    return (
        <div className={['Todo', rand].join(' ')} >
            <div style={{ width: '100%', height: '100%', backgroundColor: color, padding: '10px' }}>
                <div className='Header'>
                    <div className='Title'>
                        {isEdit ? <input value={title} onChange={(e) => setTitle(e.target.value)}/> :  <p style={{fontSize: '30px'}}><b>{title}</b></p>}
                    </div>
                    <div className='IconsCont'>
                        {isEdit ?<img src={done} alt='' width='40%' height='80%'  onClick={update}/>  
                        : <img src={editIcon} alt='' width='40%' height='80%'  onClick={() => setIsEdit(!isEdit)}/> }

                        <img src={deleteIcon} alt='' width='40%' height='80%' onClick={() => deleteData(data._id)}  />
                    </div>
                </div>
                <div className='Desc'>
                    {isEdit ? <input value={description} onChange={(e) => setDesc(e.target.value)}/> : <p style={{padding: 15}}>{description}</p>}
                    {isEdit ? <input value={color} type='color' 
                    style={{marginLeft:'5px'}}
                    onChange={(e) => setColor(e.target.value)}/> : null }
                </div>
            </div>
        </div>
    );
}

export default Todo;