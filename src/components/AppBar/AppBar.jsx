import React from 'react';
import './AppBar.css';

// functional component a.k.a. Dumb Component
// to display only
export default function AppBar(props){
    return <div className="app-bar">{props.children}</div>;
}