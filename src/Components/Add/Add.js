import React from 'react';
import './Add.css';
import PlusIcon from '../../assets/plus.png'
import DeleteTodosIcon from '../../assets/remove.png'


import {deleteAllTodos} from '../../redux/action'
import { useDispatch } from 'react-redux';


const Add = ({handleOpen}) => {

    const dipatch = useDispatch()
    
    return ( 
        <div className='Add'>
            <div className='TitleCont'>
                <h1 className='Title'>Todo</h1>
            </div>
            <div className='ImgCont'>
                <div className='ImgContInner'>
                <img onClick={handleOpen} src={PlusIcon} width='100%' height='100%' alt='plus' style={{marginBottom: '10px'}}/>
                <img onClick={() => dipatch(deleteAllTodos())} src={DeleteTodosIcon} width='100%' height='100%' alt='removeAll'/>

                </div>
            </div>
        </div>
     );
}
 
export default Add;