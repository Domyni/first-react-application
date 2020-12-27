import React, { Component } from 'react';
import './Counter.scss';

export default class Counter extends Component {
    state = {
        count: 0
    };
    
    handleIncrement = () => {
        this.increamentCount();
    }

    handleDecreament = () => {
        this.decreamentCount();
    }   

    increamentCount = () => {
        this.setState((state) => {
            return {count: state.count + 1};
        });
    }

    decreamentCount = () => {
        this.setState((state) => {
            return {count: state.count - 1};
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
