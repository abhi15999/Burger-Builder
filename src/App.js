import React, { Component } from 'react'
import Layout from './components/Layout/Layout';
import {BrowserRouter,Route} from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/checkout" component={Checkout}/>
        </Layout>
      </div>
      </BrowserRouter>
    )
  }
}
