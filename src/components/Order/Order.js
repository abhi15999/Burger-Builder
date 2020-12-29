import React from 'react'
import classes from './Order.css'
const Order = (props) => {

    let ingredients = [];

    for(let i in props.ingredients)
    {
        ingredients.push({
            name:i,
            amount:props.ingredients[i]
        })
    }

    const outputIngredients = ingredients.map(ingredient=>(
        <span
        className={classes.Span}
        key={ingredient.name}>{ingredient.name}({ingredient.amount})</span>
    ));


    return (
        <div className={classes.Order}>       
            <p>Ingredients:{outputIngredients}</p>
            <p>Price:<strong> {props.price}</strong></p>
        </div>
    )
}

export default Order;