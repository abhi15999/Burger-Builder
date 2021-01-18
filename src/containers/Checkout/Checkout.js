import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
 

  continueCheckouthandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  cancelCheckouthandler = () => {
    console.log(this.props);
    this.props.history.goBack();
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchaseRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchaseRedirect}
          <CheckoutSummary
            cancelCheckout={this.cancelCheckouthandler}
            continueCheckout={this.continueCheckouthandler}
            ingredients={this.props.ings}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};


export default connect(mapStateToProps)(Checkout);
