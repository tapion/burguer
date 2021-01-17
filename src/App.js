import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component{
  render(){
    return (
      <div>
        <BrowserRouter>
          <Layout>
            {/* <BurgerBuilder /> */}
            <Switch>
              <Route path="/checkout"  component={Checkout} />
              <Route path="/orders"  component={Orders} />
              <Route path="/" exact component={BurgerBuilder} />
            </Switch>
            {/* <Checkout /> */}
          </Layout>
        </BrowserRouter>
      </div>
    );
  
  }
}

export default App;
