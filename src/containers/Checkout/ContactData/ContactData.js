import React, { Component } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";
import classes from "./ContactData.css";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../../store/actions/index";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props);
    // this.setState({ loading: true });
    const order = {
      ingredients: this.props.ings,
      totalPrice: this.props.price,
      customer: {
        name: "Jack Torrace",
        address: "Overlook Hotel",
        street: "Next to Sidewinder",
      },
      email: "jacktorrace@theshining.com",
      deliver: "Fastest",
    };

    this.props.onOrderBurger(order);
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Enter Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Enter Post Code"
        />
        <Button clicked={this.orderHandler} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Details</h4>
        {form}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchBurger(orderData)),
  };
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    // error: state.props,
    loading: state.order.loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
