import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, NavLink} from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import AppLogo from '../AppLogo/AppLogo';
import logo from '../../assets/netflix-logo.svg';
import NavItem from '../NavItem/NavItem';
import LoginBtn from '../LoginButton/LogIn';
import LogoutBtn from '../LogoutButton/LogOut';
import HomePage from '../../routes/Home/Home';
import MyList from '../../routes/MyList/MyList';
import ShowDetail from '../../routes/ShowDetail/ShowDetail'
import UserContext from '../../contexts/UserContext'
import MyListContextProvider from '../../contexts/MyListContext'
import ShowDetailErrorBoundary from '../ErrorBoundary/ShowDetailErrorBoundary';
import styles from './Netflix.module.scss';

export default class Netflix extends Component {
    state = {
        username: "Visitor",
    };

    login = () => {
        this.setState({
            username: "Wasin",
        });
    };

    logout = () => {
        this.setState({
            username: "Visitor",
        });
    };

    render() {
        const logButton = 
            this.state.username === "Visitor" ? 
            (<LoginBtn login={this.login} name={styles.logBtn} />): 
            (<LogoutBtn logout={this.logout} name={styles.logBtn} />); 
            
        return (
            <Router>
                <UserContext.Provider value={{username: this.state.username}}>
                <AppBar>
                    <NavLink to="/" className="nav-logo">
                        <AppLogo logo={logo} path="/" />
                    </NavLink>
                    <NavItem path="/">Home</NavItem>
                    <NavItem path="/myList">My List</NavItem>
                    {logButton} 
                </AppBar>
          
               
                <main>
                    <Switch>
                        <Route exact path="/"> <HomePage /></Route>
                        <Route exact path="/myList">
                            <MyListContextProvider> 
                                <MyList />
                            </MyListContextProvider> 
                        </Route>
                        <Route exact path="/shows/:id/:name?" >
                            <ShowDetailErrorBoundary>
                                <MyListContextProvider>   
                                    <ShowDetail />   
                                </MyListContextProvider>    
                            </ShowDetailErrorBoundary> 
                        </Route>
                        <Redirect from="*" to="/"></Redirect>
                    </Switch>
                </main>
             
                
                </UserContext.Provider>
            </Router>
        );
    }
}

