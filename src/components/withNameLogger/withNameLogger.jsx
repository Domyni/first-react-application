import React, { Component } from 'react';

const EnhancedComponent = (OriginalComponent) =>{
  return class NewComponent extends Component {
    
    handleNameLogger = () =>{
        console.log(`${OriginalComponent.name} is mounted`);
    }

      render(){
          return <OriginalComponent nameLogger={this.handleNameLogger}/>;
      }
      
  }
}

export default EnhancedComponent;
