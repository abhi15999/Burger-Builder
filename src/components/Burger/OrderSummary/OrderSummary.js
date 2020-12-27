import React, { Component } from "react";
import Aux from "../../../hoc/axillary";
import Button from "../../UI/Button/Button";

class OrderSumamry extends Component {
  render() {
    const ingredients = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>Ingredients:</p>
        <ul>{ingredients}</ul>
        <p>
          <strong>Total Price : {this.props.price}</strong>
        </p>
        <p>Want to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSumamry;
