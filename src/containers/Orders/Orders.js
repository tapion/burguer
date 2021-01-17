import { Component } from "react";
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';

class Orders extends Component{

    state = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json')
            .then(res => {                
                const orders = Object.keys(res.data)
                    .map(ord =>{
                        return {...res.data[ord], id: ord};
                    });
                this.setState({laoding:false,orders})
            }).catch(() => {
                this.setState({loading: false});
            })
    }

    render() {
        return (<div>
            {this.state.orders.map(ord => {
                return <Order key={ord.id} 
                            ingredients={ord.ingredients} 
                            totalPrice={ord.totalPrice} />
            })}
        </div>);
    }
}

export default Orders;