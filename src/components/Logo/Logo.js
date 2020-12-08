import React from 'react';
import burgerlogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

const Logo = () => (
    <div className={classes.Logo}>
        <img src={burgerlogo} alt="Burger"/>
    </div>
)

export default Logo;