import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import CartHeader from './component/CartHeader'
import CartContent from './component/CartContent'

class CartComponent extends Component {
    render() {
        return (
            <div>
                <Route to={"/mobile/cart"} component={CartHeader}></Route>
                <Route to={"/mobile/cart"} component={CartContent}></Route>
            </div>
        );
    }
}

export default CartComponent;