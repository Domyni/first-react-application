import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        count: 0
    };
    
    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDecreament = () => {
        this.setState({
            count: this.state.count -1
        })
    }

    render() {
        return (
            <div>
                <span> Counter ({this.state.count}) </span>&nbsp;
                <div>
                    <button type="button" 
                            className="counter-btn"
                            onClick={this.handleIncrement}> 
                            + 
                    </button>
                    <button type="button" 
                            className="counter-btn"
                            onClick={this.handleDecreament}> 
                            - 
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;