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
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ing = {};
        for(let param of query.entries())
        {
            ing[param[0]] = +param[1]
        }

        this.setState({ingredients:ing})
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
                <Route path={this.props.match.path + '/contact-data'} component={ContactData}/> 
            </div>
        )
    }
}
