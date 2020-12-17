import React from 'react';


export default function logIn(props){
  
    return (
            <button type="submit" 
                    onClick={props.login}
                    className={props.name}>
                    Log in
            </button>
    );
}; 
