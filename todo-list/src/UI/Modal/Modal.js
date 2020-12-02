import React from 'react';
import { Modal } from '@material-ui/core';

const SimpleModal = (props) => {
    return ( 
        <div className='modal'>
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            {props.body}
        </Modal>
        </div>
     );
}
 
export default SimpleModal;