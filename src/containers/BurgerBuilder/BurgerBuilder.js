import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from './../../hoc/Auxiliar';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 1,
    meat: 3
};

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    checkPurchesableHandler = () =>{
        this.setState((state,props) => {
            const ingredients = {...state.ingredients};
            const sum = Object.keys(ingredients).map(ingre => {
                return ingredients[ingre];
            }).reduce((sum, el)=> sum + el, 0);
            return {
                purchasable: sum > 0
            }
        });
    }

    addIngredientHandler = type => {
        // const oldCount = this.state.ingredients[type];
        // const ingredients = {...this.state.ingredients};
        // ingredients[type] = oldCount + 1;
        // const totalPrice = this.state.totalPrice + INGREDIENTS_PRICES[type]
        // this.setState({totalPrice: totalPrice, ingredients: ingredients});
        this.setState((status,props) =>{
            const oldCount = status.ingredients[type];
            const ingredients = {...status.ingredients};
            ingredients[type] = oldCount + 1;
            const totalPrice = status.totalPrice + INGREDIENTS_PRICES[type]
            return {
                totalPrice: totalPrice,
                ingredients: ingredients,
            }
        },this.checkPurchesableHandler);
    }

    deleteIngredientHandler = type => {
        this.setState((status,props) =>{
            const oldCount = status.ingredients[type];
            if(oldCount <= 0) return {}
            const ingredients = {...status.ingredients};
            ingredients[type] = oldCount - 1;
            let totalPrice = status.totalPrice - INGREDIENTS_PRICES[type]
            return {
                totalPrice: totalPrice,
                ingredients: ingredients,
            }
        },this.checkPurchesableHandler);
    }

    showOrder = () => {
        this.setState({purchasing: !this.state.purchasing});
    }

    continuePurchaseHandler = () => {
        this.setState({loading: true})
        const ingredients = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Miguel Vargas',
                country: 'Colombia',
                address: {
                    neighborn: 'Perdomo',
                    area: 'Ciudad Perdomo'
                }
            }
        }


        axios.post('/orders.json', ingredients)
            .then(res => {})
            .catch(err => console.error(err))
            .finally(() => {this.setState({loading: false}); this.showOrder()});
    }

    render(){
        let orderSumary = <OrderSummary 
                            price={this.state.totalPrice.toFixed(2)}
                            continue={this.continuePurchaseHandler}
                            cancelOrder={this.showOrder}
                            ingredients={this.state.ingredients} />;
        if(this.state.loading){
            orderSumary = <Spinner />
        }
        const disbledButton = {...this.state.ingredients};
        Object.keys(disbledButton).forEach(ingre => disbledButton[ingre] = disbledButton[ingre] <= 0);
        return (
            <Aux>
                <Modal 
                    showModal ={this.state.purchasing} 
                    closeModal={this.showOrder}>
                    {orderSumary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientsAdd={this.addIngredientHandler} 
                    ingredientsDel={this.deleteIngredientHandler}
                    disabled={disbledButton}
                    purchasable={this.state.purchasable}
                    showModal={this.showOrder}
                    price={this.state.totalPrice} />
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder);