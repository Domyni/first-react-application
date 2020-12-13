import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ShowDetail extends Component {
    
    render(){
        console.log(this.props);
        return <p>This is Show Detail</p>;
    }
}

// Only one single default export
export default withRouter(ShowDetail);
