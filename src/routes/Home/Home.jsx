import React, { Component } from 'react';
import Counter from '../../components/Counter/Counter';
import Todo from '../../components/Todo/Todo';
import Clock from '../../components/Clock/Clock.jsx';
import './Home.css';

class HomePage extends Component {
    
    render(){
        return (
            <div>
                <p>This is Home Page</p>
                <p>Username : {this.props.Name}</p>
                <Clock />
                <Counter />
                <Todo />  
            </div>
        );
    }
}

// Only one single default export
export default HomePage;
