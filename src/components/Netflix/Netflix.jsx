import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import logo from '../../assets/netflix-logo.svg';
import NavItem from '../NavItem/NavItem';
import Clock from '../Clock/clock';
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import LoginBtn from '../LoginButton/LogIn'
import LogoutBtn from '../LogoutButton/LogOut'
import PosterList from '../PosterList/PosterList';
import Filter from '../Filter/Filter';
import './Netflix.css';


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
        const logButton = 
            this.state.username === null ? (
            <LoginBtn login={this.login}/>
          ): (
            <LogoutBtn logout={this.logout} />
          ); 

        return (
            <>
                <AppBar>
                <div className ="main-nav"> 
                    <AppLogo logo={logo} path="top"/>
                    <NavItem path="#home">Home</NavItem>
                    <NavItem path="#myList">My List</NavItem>
                </div>
                    <div className="logBtn">{logButton}</div>
                </AppBar>   
                <main>
                    <h1>Hello World</h1>
                    <p>{this.state.showClock && <Clock datetime="value chanages"/>}</p>
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

