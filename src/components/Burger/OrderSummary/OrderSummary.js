import React from 'react';
import Aux from '../../../hoc/axillary'
import Button from '../../UI/Button/Button'
const OrderSumamry=(props)=>{

    const ingredients = Object.keys(props.ingredients).map(igKey=>{return (
            <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    )})
 
    return (
        <Aux >
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
            {ingredients}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Want to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default OrderSumamry;