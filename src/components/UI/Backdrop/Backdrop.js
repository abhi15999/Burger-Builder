import React from 'react'
import classes from './Backdrop.css'

const Backdrop = (props) =>{
    return ( 
        props.display? <div className={classes.Backdrop} onClick={props.clicked}></div>:null
    )
}

export default Backdrop;