import { Component } from "react"
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css'

class ContactData extends Component{

    state = {
        name: '',
        email: '',
        street: {
            street: '',
            postalCode: 0
        },
        loading: false,
    }

    sendCustomerDataHandler = (event) =>{
        event.preventDefault();
        this.setState({loading: true})
        const ingredients = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            customer: {
                name: 'Miguel Vargas Cabezas',
                country: 'Colombia',
                address: {
                    neighborn: 'Perdomo',
                    area: 'Ciudad Perdomo'
                }
            }
        }
        console.log(ingredients);
        axios.post('/orders.json', ingredients)
            .then(res => {
                this.setState({loading: false});
                this.props.history.push('/');
            });
    }

    render () {
        let form = (<div>
            <h4>Enter your Contact Data</h4>
            <form>
                <Input type="text" name="name" placeholder="Your Name" />
                <Input type="email" name="email" placeholder="Your Email" />
                <Input type="text" name="street" placeholder="Street" />
                <Input type="text" name="postal" placeholder="Postal code" />
                <Button btnType="Success" clicked={this.sendCustomerDataHandler}>Order</Button>
            </form>
        </div>);
        if(this.state.loading){
            form = <Spinner />
        }
        return (
        <div className={classes.ContactData}>
            {form}
        </div>);
    }
}

export default ContactData;