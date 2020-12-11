
import React from 'react'
import MenuIcon from '../../assets/images/menuIcon.svg'
import classes from './menuIcon.css'
const menuIcon = (props) => {
    return (
        <img className={classes.MenuIcon} onClick={props.clicked} src={MenuIcon} alt="menu"/>
    )
}

export default menuIcon;