import React,{Component} from 'react'
import Aux from '../../hoc/axillary'
import Burger from '../../components/Burger/Burger'
export default class BurgerBuilder extends Component{
    
    state={
        ingredients:{
            salad:1,
            bacon:1,
            cheese:1,
            meat:2
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Builder</div>
            </Aux>
        );
    }
}