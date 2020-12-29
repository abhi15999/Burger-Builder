import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData';
import {Route} from 'react-router-dom'
export default class Checkout extends Component {
    state = {
        ingredients:{
            cheese:1,
            salad:1,
            bacon:1,
            meat:0
        },
        totalPrice:0
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ing = {};
        let price = 0;
        for(let param of query.entries())
        {
            if(param[0] === 'price'){
                price = param[1];
            } else {
                ing[param[0]] = +param[1];
            }
        }

        this.setState({ingredients:ing , totalPrice:price})
    }
    continueCheckouthandler=()=>{
        this.props.history.replace('/checkout/contact-data')
    }
    cancelCheckouthandler=()=>{
        console.log(this.props);
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <CheckoutSummary 
                cancelCheckout={this.cancelCheckouthandler}
                continueCheckout={this.continueCheckouthandler}
                ingredients={this.state.ingredients}/>
                <Route path={this.props.match.path + '/contact-data'} 
                render={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props}/>)}/> 
            </div>
        )
    }
}
