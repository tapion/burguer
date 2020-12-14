import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';
import Aux from './../../../hoc/Auxiliar';

class Modal extends Component{

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.showModal !== this.props.showModal;
    }
    
    render(){
        return (
            <Aux>
                <Backdrop showModal={this.props.showModal} clicked={this.props.closeModal} />
                    <div 
                        className={classes.Modal}
                        style={{
                            transform: this.props.showModal ? 'translateY(0)': 'translateY(-100vh)',
                            opacity: this.props.showModal ? '1': '0',
                        }}>
                        {this.props.children}
                    </div>
            </Aux>
        );
    }
}

export default Modal;