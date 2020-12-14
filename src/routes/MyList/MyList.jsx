import React, { Component } from 'react';

class Mylist extends Component {

    render(){
        return (
        <div>
            <p>This is My List </p> 
            <p>Username : {this.props.user}</p>
        </div>
        );
    }
}

export default Mylist;
