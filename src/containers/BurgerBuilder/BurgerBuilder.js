import React, { Component } from "react";
import Aux from "../../hoc/axillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
const INGREDIENT_PRICE = {
  salad: 50,
  cheese: 70,
  meat: 60,
  bacon: 80,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 25,
    purchasable: false,
    displayOrder: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios.get(
      "https://burger-builder-5da08-default-rtdb.firebaseio.com/ingredients.json"
    ).then((response) => {
      this.setState({ ingredients: response.data });
    }).catch(error=>{
      this.setState({error:true})
    });
  }

  purchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    // this.setState({purchasable:sum>0})
    if (sum > 0) {
      this.setState({ purchasable: true });
    } else {
      this.setState({ purchasable: false });
    }
  }

  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.purchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] - 1;

    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;

    const newPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.purchaseState(updatedIngredients);
  };

  orderHandler = () => {
    this.setState({ displayOrder: true });
  };

  orderCancelHandler = () => {
    this.setState({ displayOrder: false });
  };
  orderContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
      customer: {
        name: "Jack Torrace",
        address: "Overlook Hotel",
        street: "Next to Sidewinder",
      },
      email: "jacktorrace@theshining.com",
      deliver: "Fastest",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, displayOrder: false });
      })
      .catch((error) => {
        this.setState({ loading: false, displayOrder: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = <Spinner />;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientsHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            ordered={this.orderHandler}
            purchase={this.state.purchasable}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCanceled={this.orderCancelHandler}
          purchaseContinued={this.orderContinueHandler}
          price={this.state.totalPrice}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

      if(this.state.error)
      {
        burger = (
          <p>Some error Occured</p>
        )
      }

    return (
      <Aux>
        <Modal
          display={this.state.displayOrder}
          modalclosed={this.orderCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
