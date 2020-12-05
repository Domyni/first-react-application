
import React from 'react';
import LogIn from '../LoginButton/login';
import AppLogo from '../AppLogo/AppLogo';
import NavItem from '../NavItem/NavItem';

// functional component a.k.a. Dumb Component
// to display only
export default function AppBar(){
    return <div className="flex-container"> 
                <div className="logo">
                    <AppLogo/>
                </div>
                <div className="nav">
                    <NavItem path ="#home" text="Home"/><span>&nbsp;</span>
                    <NavItem path ="#mylist" text="My List"/>
                </div>
                <div className="login">
                    <LogIn/>
                </div>
           </div>
};