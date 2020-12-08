import React from 'react';
import './NavItem.css'

// Props is terminology here
// Function component accept property via argument.

export default function NavItem({path, children}){
    return <a className="nav-item" href={path}>
           {children}
           </a>
}