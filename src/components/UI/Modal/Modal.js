import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/axillary";
import Backdrop from "../Backdrop/Backdrop";
class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.display !== this.props.display ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop
          display={this.props.display}
          clicked={this.props.modalclosed}
        />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.display
              ? "translateY(0)"
              : "translateY(-100vh)",
            opacity: this.props.display ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
