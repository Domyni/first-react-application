import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import logo from '../../assets/netflix-logo.svg';
import NavItem from '../NavItem/NavItem';
import Clock from '../Clock/Clock.jsx';
import LoginBtn from '../LoginButton/LogIn';
import LogoutBtn from '../LogoutButton/LogOut';
import Counter from '../Counter/Counter';
import Todo from '../Todo/Todo';
import './Netflix.css';

// Class keyword with component named "Netflix" here as smart component
// Netflix child to take in a lot of functions (extends) from Coponent, Must entend from Component provided by `react` library.
// Render is a method to paint / show on your application

class Netflix extends Component {
    state = {
        showClock: true,
        username: null,
        filter: ''
    };

    login = () =>{
        this.setState({
            username: 'Wasin',
        });
    };

    logout = () =>{
        this.setState({
            username: null,
        });
    };

    filter = (value) => {
        // console.log(value);
        this.setState({
            filter: value
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
                    <AppLogo logo={logo} path="top"/>
                    <NavItem path="#home">Home</NavItem>
                    <NavItem path="#myList">My List</NavItem>
                    {logButton}
                </AppBar>   
                <main>
                    {this.state.showClock && <Clock/>}
                    <Counter />
                    <Todo filter={this.filter}/>
                    {this.state.todo}
                    {this.state.username !== null && (
                    <p className="greeting"> Greetings! {this.state.username}</p>
                    )}
                </main>
            </>
        );
    }
}

// Only one single default export
export default Netflix;







// import ShoppingCart from '../ShoppingCart/ShoppingCart'
// import PosterList from '../PosterList/PosterList';
// import Filter from '../Filter/Filter';

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