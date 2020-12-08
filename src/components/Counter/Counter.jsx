import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        count: 0
    };
    
    increaseCount(){
        this.setState ({
            count: this.state.count + 1
        });
    }

    decreaseCount(){
        this.setState({
            count: this.state.count - 1
        });
    }

    addtoCart = () => {
        return this.increaseCount();
    }

    removeFromCart = () => {
        return this.decreaseCount();
    }

    render() {
        return (
            <React.Fragment>
                <span> Counter ({this.state.count}) </span>&nbsp;
                <div className ="CounterBtn">
                    <button type="button" onClick={this.addtoCart}> + </button>
                    <button type="button" onClick={this.removeFromCart}> - </button>
                </div>
            </React.Fragment>
        )
    }
}

export default Counter;