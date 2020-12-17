import React from 'react';

export default function logOut(props){
  
    return (
            <button type="submit" 
                    onClick={props.logout}
                    className={props.name}>
                    Log out
            </button>
    );
}; 
