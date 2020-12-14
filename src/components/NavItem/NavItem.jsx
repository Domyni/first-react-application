import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css'

// Props is terminology here
// Function component accept property via argument.

export default function NavItem({path, children}){

    return <NavLink className="nav-item" 
                    to={path}>
                    {children}
           </NavLink>
}