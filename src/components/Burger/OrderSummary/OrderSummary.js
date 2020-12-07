import React from 'react';
import Aux from '../../../hoc/axillary'
const OrderSumamry=(props)=>{

    const ingredients = Object.keys(props.ingredients).map(igKey=>{return (
            <li><span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}</li>
    )})
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
            {ingredients}
            </ul>
        </Aux>
    );
}

export default OrderSumamry;