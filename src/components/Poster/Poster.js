import React from 'react';

export default function Poster ({image, name}){
    return (
    <div>
        <img src={image} alt={name}/>
    </div>
    )
}