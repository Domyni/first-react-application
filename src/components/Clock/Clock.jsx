import React, { Component } from 'react';

export default class Clock extends Component{

    constructor() {
        super();
        this.state = {
          datetime: new Date()
        };
    }    
    
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                datetime: new Date()
            });
        }, 1000);
    }   

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
     return <div>
                <p>{this.state.datetime.toLocaleTimeString()}</p>
            </div>;
    }
}