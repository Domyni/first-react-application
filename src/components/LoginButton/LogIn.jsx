import React from 'react';

export default function logIn(props){
  
    return (
            <button type="submit" 
                    onClick={props.login}>
                    Log in
            </button>
    );
}; 
