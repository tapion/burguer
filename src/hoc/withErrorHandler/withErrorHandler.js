import React, { Component } from 'react';
import Aux from './../Auxiliar';
import Modal from './../../components/UI/Modal/Modal';

const withErrorHandler = (WrapperComponent,axios) =>{
    return class extends Component{
        state = {
            error: false,
            show: false
        }

        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:false})
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, err => {
                console.log(err)
                this.setState({error: err,show:true});
            })
        }

        componentWillUnmount(){
            axios.interceptor.request.eject(this.reqInterceptor);
            axios.interceptor.response.eject(this.resInterceptor);
        }

        hiddeErrorHandler = () => {
            this.setState({show:false})
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        closeModal={this.hiddeErrorHandler}
                        showModal={this.state.show}>{this.state.show ? this.state.error.name : null}</Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    } 
}

export default withErrorHandler;