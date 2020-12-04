import React from 'react';
import './Add.css';
import PlusIcon from '../../assets/plus.png'

const Add = ({handleOpen, deleteAll}) => {
    return ( 
        <div className='Add'>
            <div className='TitleCont'>
                <h1 className='Title' onClick={deleteAll}>Todo</h1>
            </div>
            <div className='ImgCont'>
                <div className='ImgContInner'>
                <img onClick={handleOpen} src={PlusIcon} width='100%' height='100%' alt='plus'/>
                </div>
            </div>
        </div>
     );
}
 
export default Add;