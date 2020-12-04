import React from 'react'
import { Modal } from '@material-ui/core'

const SimpleModal = (props) => {
    return ( 
        <Modal
            open={props.open}
            onClose={props.handleClose}
        >
            {props.body}
        </Modal>
     )
}
 
export default SimpleModal