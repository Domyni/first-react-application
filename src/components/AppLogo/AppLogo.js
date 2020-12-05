// Alwasy import react to indicate to compiler
// All import reqquire extension except .js extension.

import React from 'react';
import NetflixLogo from '../../assets/netflix-logo.svg';

// . current folder
// .. one hierarcy up folder

export default function AppLogo(){
    return (
        <img src={NetflixLogo} alt="netflixLogo"></img>
    );
};