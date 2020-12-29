import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-orders'
export default class Orders extends Component {
    state = {
        order:[],
        loading:true
    }

    componentDidMount(){
        axios.get('/orders.json')
        .then(response =>{
            const fetchorders = [];
            for( let i in response.data)
            {
                fetchorders.push({
                    ...response.data[i],
                    id:i
                });
            }
            this.setState({loading:false , order:fetchorders})
            console.log(this.state.order)
        })
        .catch(err=>{
            this.setState({loading:false})
        })
    }
    
    render() {
        return (
            <div>
                {this.state.order.map(order=>(
                    <Order key={order.id} ingredients={order.ingredients} price={order.totalPrice}/>
                ))}
            </div>
        )
    }
}
