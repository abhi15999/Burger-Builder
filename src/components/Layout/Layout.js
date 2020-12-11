import React, { Component } from 'react';
import Aux from '../../hoc/axillary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        showDrawer:true
    }

    closeSideDrawerHandler = () => {
        this.setState({showDrawer:false})
    }
    toggleSideDrawerHandler = () =>{
        this.setState((prevState)=>{
            this.setState({showDrawer:!prevState.showDrawer})
        })
    }
    render(){

        return(
            <Aux>
            <Toolbar toggle={this.toggleSideDrawerHandler}/>
            <SideDrawer show={this.state.showDrawer} closed={this.closeSideDrawerHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
} 
export default Layout;