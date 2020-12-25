import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../axillary";
const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
      state = {
          error:null
      }

      constructor(props){
        super(props);
        axios.interceptors.request.use(req=>{
            this.setState({error:null});
            return req;
        });

        axios.interceptors.response.use(res=>res,error=>{
            this.setState({error:error})
        })
      }

    errorConfirmedHandler = () => {
        this.setState({error:null});
    }  
    render() {
      return (
        <Aux>
          <Modal display={this.state.error}
          modalclosed = {this.errorConfirmedHandler}
          >{this.state.error ?  this.state.error.message:null}</Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
