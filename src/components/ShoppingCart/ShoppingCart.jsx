import React, { Component } from 'react';

export default class ShoppingCart extends Component {
    state = {
        productList: [],
        totalPrice: 0,
        itemCount: 0
    };

// STATE are not shared between different components !!!
// Each hold their own STATE and PROPERTY
// React has one way direction to pass data.    

constructor() {
    super();
    // bind function to class context
    this.addToCart = this.addToCart.bind(this);
    }

increamentCount() {
    // perfomr some calculation before adding count
    // Component state
    this.setState({
        itemCount: this.state.itemCount + 1,
        });
    // Alternative using call back function
    // this.setState((state)=>{
    //     return {
    //         itemCount: state.increamentCount + 1,
    //     }
    // })
    }

addToCart() {
    console.log("adding to cart");
    // this in this context is referring to addToCart()
    this.increamentCount();
    }

addToCartwithClassFieldSyntax = () => {
    this.increamentCount();
}

increaseTotlaPriceHandler = () => {
    this.setState({
        totalPrice: 2000,
    });
};

render() {
    // this in this contect is referring to ShopingCart
    return (
        <div>
            <p>Shopping Cart Item {this.state.itemCount}</p>
            <p>Shopping Total Price {this.state.totalPrice}</p>
            <button type="button" onClick={this.addToCart}>
                Add to Cart
            </button>
            <button type="button" onClick={this.addToCartwithClassFieldSyntax}>
                Add to cart with class syntax
            </button>
            <button type="button" onClick={this.increaseTotlaPriceHandler}>
                Increase Total Price
            </button>
        </div>
        );
    }
}