// Alwasy import react to indicate to compiler
// All import reqquire extension EXCEPT .js extension.

import React from 'react';
import './AppLogo.css';

// . current folder
// .. one hierarcy up folder

export default function AppLogo(props){
    return (
        <div className="app-logo">
            <a href={props.path}><img src={props.logo} alt="logo"></img></a>
        </div>
    );
};