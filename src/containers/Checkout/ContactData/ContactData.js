import { Component } from "react"
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './ContactData.module.css'

class ContactData extends Component{

    state = {
        customerData:{
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                }
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                }
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your address'
                }
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail'
                }
            },
            delivery: {
                elementType: 'select',
                elementConfig: [
                    {value:'fastest', displayValue: 'Fastest'},
                    {value:'cheapest', displayValue: 'Cheapest'}
                ]
            }        
        },
        loading: false,
    }

    sendCustomerDataHandler = (event) =>{
        event.preventDefault();
        this.setState({loading: true})
        const ingredients = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
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
                <Input label="Name" type="text" name="name" placeholder="Your Name" />
                <Input label="Email" type="email" name="email" placeholder="Your Email" />
                <Input label="Street" type="text" name="street" placeholder="Street" />
                <Input label="Postal" type="text" name="postal" placeholder="Postal code" />
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