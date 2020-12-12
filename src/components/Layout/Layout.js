import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliar';
import classes from './Layout.module.css';
import Toolbar from './../Navigation/Toolbar/Toolbar';
import SideDrawer from './../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showDrawerClosed: false
    }

    showSideDrawerClosedHandler = () => {
        this.setState({showDrawerClosed: false})
    }

    showSideDrawerHandler = () =>{
        this.setState({showDrawerClosed: true})
    }

    render(){
        return (<Aux>
                <Toolbar showSideDrawer={this.showSideDrawerHandler}></Toolbar>
                <SideDrawer 
                    open={this.state.showDrawerClosed}
                    clicked={this.showSideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>);

    }
}


export default Layout;