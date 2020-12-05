import React from 'react';

// Props is terminology here
// Function component accept property via argument.

export default function NavItem(props){
    return <a href={props.path}>{props.text}</a>;
}