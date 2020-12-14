import React,{Component} from 'react'
import Aux from '../../hoc/axillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
 
import Modal from '../../components/UI/Modal/Modal'

const INGREDIENT_PRICE = {
    salad:50,
    cheese:70,
    meat:60,
    bacon:80
}


export default class BurgerBuilder extends Component{
    
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 25,
        purchasable:false,
        displayOrder:false
    }

    purchaseState(ingredients){
         
        const sum =  Object.keys(ingredients).map(igKey=>{return ingredients[igKey]}).reduce((sum,el)=>{
            return sum+el;
        },0);

        // this.setState({purchasable:sum>0})
        if(sum>0)
        {
            this.setState({purchasable:true});
        } else {
            this.setState({purchasable:false});

        }
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice+INGREDIENT_PRICE[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients })
        this.purchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const updatedCount = this.state.ingredients[type] - 1;
        // make updatedCount as 'let' and use this logic or...
        // if(updatedCount<0)
        // {
        //     updatedCount= 0;
        // }
        if(this.state.ingredients[type] <= 0){
            return;
        }


        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        
        const newPrice = this.state.totalPrice-INGREDIENT_PRICE[type];
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients })
        this.purchaseState(updatedIngredients);
    }


    orderHandler = () =>{
        this.setState({displayOrder:true})
    }

    orderCancelHandler = () =>{
        this.setState({displayOrder:false})
    }
    orderContinueHandler = () =>{
        const order ={
            ingredients : this.state.ingredients,
            totalPrice : this.state.totalPrice,
            customer : {
                name:'Jack Torrace',
                address:'Overlook Hotel',
                street:'Next to Sidewinder'
            },
            email:'jacktorrace@theshining.com',
            deliver:'Fastest'
        }
        axios.post('/orders.json',order)
        .then(response=>console.log(response))
        .catch(error=>console.log(error));
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
      
        return(
            <Aux>
                <Modal display={this.state.displayOrder} modalclosed={this.orderCancelHandler}>
                <OrderSummary ingredients={this.state.ingredients}
                 purchaseCanceled={this.orderCancelHandler}
                 purchaseContinued={this.orderContinueHandler}
                 price={this.state.totalPrice}/>
                </Modal>
                <Burger  ingredients={this.state.ingredients}/>
                

                <BuildControls 
                ingredientAdded={this.addIngredientsHandler}
                ingredientRemoved={this.removeIngredientHandler} 
                disabled = {disabledInfo}
                price={this.state.totalPrice}
                ordered={this.orderHandler}
                purchase={this.state.purchasable}/>
            </Aux>
        );
    }
}   