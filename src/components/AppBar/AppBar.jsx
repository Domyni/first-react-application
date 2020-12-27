import React from 'react';
import './AppBar.scss';

export default function AppBar(props) {
    return  <div className="app-bar">
                {props.children}
            </div>;
}