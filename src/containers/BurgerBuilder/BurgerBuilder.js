import React,{Component} from 'react'
import Aux from '../../hoc/axillary'
import Burger from '../../components/Burger/Burger'
export default class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger/>
                <div>Builder</div>
            </Aux>
        );
    }
}