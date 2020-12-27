import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Taste Good?</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.cancelCheckout} btnType="Danger">Cancel</Button>
            <Button clicked={props.continueCheckout} btnType="Success">Continue</Button>
        </div>
    )
}

export default CheckoutSummary;