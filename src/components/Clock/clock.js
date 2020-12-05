import React, { Component } from 'react';

// Class component - Smart Component (Support State out of the box)
// Functional Component = Dumb Component
export default class Clock extends Component{
    constructor(prop){
        super();
        this.state = {
          datetime: new Date()
        };
    }    
    
    // Attaching the component to the browser
    // ONLY Run once
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                datetime: new Date(),
            });
        }, 1000);
    }   

    // Updating component
    // Run EVERYTIME props state and force update is triggered
    componentDidUpdate(){
        // update state herer
        // 24
        //if(this.state.datetime.AMPM === 'PM'){}
    }

    componentWillUnmount (){
        clearInterval(this.timer);
    }

    render() {
     return <div>{this.state.datetime.toLocaleTimeString()}</div>;
    }
}

