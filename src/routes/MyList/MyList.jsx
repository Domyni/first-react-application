import React, { Component } from 'react';

class Mylist extends Component {

    render(){
        return (
        <div>
            <p>This is My List </p> 
            <p>Username : {this.props.Name}</p>
        </div>
        )
    }
}

// Only one single default export
export default Mylist;
