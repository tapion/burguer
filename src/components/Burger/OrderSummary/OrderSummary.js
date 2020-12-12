import React, { Component } from 'react';
import Aux from './../../../hoc/Auxiliar';
import Button from './../../UI/Button/Button';

// const orderSummary = props => {
//     const ingredients = Object.keys(props.ingredients).map(ingr => {
//         return (
//             <li>
//                 <p><span>{ingr}:</span> {props.ingredients[ingr]}</p>
//             </li>);
//     })
//     return (
//         <Aux>
//             <h3>Your order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>
//                 {ingredients}
//             </ul>
//             <p><strong>Total price: {props.price}</strong></p>
//             <p>Are you ready for checkout?</p>
//             <Button clicked={props.cancelOrder} btnType='Danger'>Cancel</Button>
//             <Button clicked={props.continue} btnType='Success'>Continue</Button>
//         </Aux>
//     );
// };
class OrderSummary extends Component{
    componentDidMount() {
        console.log('Esto es otra ves');
    }

    render () {
        const ingredients = Object.keys(this.props.ingredients).map(ingr => {
            return (
                <li key={ingr}>
                    <p><span>{ingr}:</span> {this.props.ingredients[ingr]}</p>
                </li>);
        })
    
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Are you ready for checkout?</p>
                <Button clicked={this.props.cancelOrder} btnType='Danger'>Cancel</Button>
                <Button clicked={this.props.continue} btnType='Success'>Continue</Button>
            </Aux>
        );
        }
}

export default OrderSummary;