import React,{Component} from 'react'
import Aux from '../../hoc/axillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
 

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
        purchasable:false
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

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for( let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded={this.addIngredientsHandler}
                ingredientRemoved={this.removeIngredientHandler} 
                disabled = {disabledInfo}
                price={this.state.totalPrice}
                purchase={this.state.purchasable}/>
            </Aux>
        );
    }
}