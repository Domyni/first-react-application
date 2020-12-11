import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import logo from '../../assets/netflix-logo.svg';
import NavItem from '../NavItem/NavItem';

import LoginBtn from '../LoginButton/LogIn';
import LogoutBtn from '../LogoutButton/LogOut';
import HomePage from '../../routes/Home/Home';
import MyList from '../../routes/MyList/MyList';
import ShowDetail from '../../routes/ShowDetail/ShowDetail'
import './Netflix.css';

// Class keyword with component named "Netflix" here as smart component
// Netflix child to take in a lot of functions (extends) from Coponent, Must entend from Component provided by `react` library.
// Render is a method to paint / show on your application

class Netflix extends Component {
    state = {
        username: "Visitor",
    };

    login = () =>{
        this.setState({
            username: "Wasin",
        });
    };

    logout = () =>{
        this.setState({
            username: "Visitor",
        });
    };

    render(){
        const logButton = 
            this.state.username === "Visitor" ? (
            <LoginBtn login={this.login}/>
          ): (
            <LogoutBtn logout={this.logout} />
          ); 

        return (
            <Router>
                <AppBar>
                    <AppLogo logo={logo} path="/"/>
                    
                    {/* NavItem wrapped with NavLink */}
                    <NavItem path="/">Home</NavItem>
                    <NavItem path="/myList">My List</NavItem>
                    {logButton}
                </AppBar>
                <main>
                    <Switch>
                        <Route exact path="/" > <HomePage Name={this.state.username} /> </Route>
                        <Route path="/mylist"> <MyList Name={this.state.username}/> </Route>
                        <Route path="/shows/:id/:name?"> <ShowDetail /> </Route>
                    </Switch>
                </main>
            </Router>
        );
    }
}

// Only one single default export
export default Netflix;







// PLEASE IGNORE BELOW
// import ShoppingCart from '../ShoppingCart/ShoppingCart'
// import PosterList from '../PosterList/PosterList';
// import Filter from '../Filter/Filter';
    // State
    // filter: ''

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             showClock: false,
    //         });
    //     }, 5000);
    // }

    // filter = (value) => {
    //     this.setState({
    //         filter: value,
    //     });
    // };


    //     <ShoppingCart/>
    //      {this.state.username !== null && (
    //     <p className="greeting"> Greetings! {this.state.username}</p>
    //      )}
    //     {[1, 2, 3, 4, 5].map((value) =>
    //         <li>{value}</li>
    //     )}
    // <PosterList title="Trending Now"/>
    // <Filter/>

    // filter = (value) => {
    //     // console.log(value);
    //     this.setState({
    //         filter: value
    //     });
    // };


    // showClock: true,
    // {this.state.showClock && <Clock/>}

    // {this.state.username !== null && (
    //     <p className="greeting"> Greetings! {this.state.username}</p>
    //     )}