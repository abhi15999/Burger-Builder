import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/axillary'
import Backdrop from '../Backdrop/Backdrop'
const Modal = (props) =>{
 return (
     <Aux>
         <Backdrop display={props.display} clicked={props.modalclosed}/>
     <div className={classes.Modal} style={{transform:props.display ? 'translateY(0)':'translateY(-100vh)',
     opacity:props.display?'1':'0'
     }}>
         {props.children}
     </div>
     </Aux>
 )
}

export default Modal;