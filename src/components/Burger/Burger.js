import React from 'react';
import classes from './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger =(props)=>{
    const ingredients = Object.keys(props.ingredients).map(aKey=>{
        return [...Array(props.ingredients[aKey])].map((_,i)=>{
            return <BurgerIngredient key={i+aKey} type={aKey}/>
        })
    })
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
};


export default Burger;