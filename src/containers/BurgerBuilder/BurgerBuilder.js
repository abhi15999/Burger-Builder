import React, { Component } from "react";
import Aux from "../../hoc/axillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

class BurgerBuilder extends Component {
  state = {
    displayOrder: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios.get(
    //   "https://burger-builder-5da08-default-rtdb.firebaseio.com/ingredients.json"
    // ).then((response) => {
    //   this.setState({ ingredients: response.data });
    // }).catch(error=>{
    //   this.setState({error:true})
    // });
  }

  purchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
      return sum>0
  }



  orderHandler = () => {
    this.setState({ displayOrder: true });
  };

  orderCancelHandler = () => {
    this.setState({ displayOrder: false });
  };
  orderContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = <Spinner />;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            disabled={disabledInfo}
            price={this.props.tP}
            ordered={this.orderHandler}
            purchase={this.purchaseState(this.props.ings)}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCanceled={this.orderCancelHandler}
          purchaseContinued={this.orderContinueHandler}
          price={this.props.tP}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    if (this.state.error) {
      burger = <p>Some error Occured</p>;
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

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    tP: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENTS,
        ingredientName: ingName,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
