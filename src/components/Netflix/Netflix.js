import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import Clock from '../Clock/clock';
import ShoppingCart from '../ShoppingCarat/ShoppingCart'
import LoginButton from '../LoginButton/login'
import LogoutButton from '../LogoutButton copy/logout'
import PosterList from '../PosterList/PosterList';
import Filter from '../Filter/Filter';


// Default import
// Name import {name here}

// Class keyword with component named "Netflix" here a.k.a smart component
// Netflix child to take in a lot of functions (extends) from Coponent, Must entend from Componet provided by `react` library.
// Render is a method to paint / show on your application

class Netflix extends Component {
    state = {
        showClock: true,
        username: null,
        filter:'',
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                showClock: false,
            });
        }, 5000);
    }

    login = () =>{
        this.setState({
            username: 'John',
        });
    };

    logout = () =>{
        this.setState({
            username: null,
        });
    };

    filter = (value) => {
        this.setState({
            filter: value,
        });
    };

    render(){
        const button = 
            this.state.username === null ? (
            <LoginButton login={this.login}/>
          ): (
            <LogoutButton logout={this.logout} />
          ); 

        return (
               <>
                <AppBar/>
                {button}
                <main>
                    {this.state.showClock && <Clock datetime="value chanages"/>}
                    <ShoppingCart/>
                    {this.state.username !== null && (
                        <p className="greeting">{this.state.username}</p>
                    )}
                    {[1, 2, 3, 4, 5].map((value) =>
                        <li>{value}</li>
                    )}
                <PosterList title="Trending Now"/>
                <Filter/>
                </main>
               </>
        );
    }
}

// Only one single default export
// Naming doesn't mattter
export default Netflix;

