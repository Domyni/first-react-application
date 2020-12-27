import React from 'react';
import './AppLogo.scss';

export default function AppLogo(props, path) {
    return  <div className="app-logo">
                    <img src={props.logo} 
                         alt="logo" />
            </div>;
};