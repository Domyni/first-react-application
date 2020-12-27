import React, { Component } from 'react';

export default function EnhancedComponent (OriginalComponent){
 
  return (
      class NewComponent extends Component {

      handleNameLogger = (OriginalComponent) => {
        console.log(`${OriginalComponent.name} is mounted`);
      }

      render() {
          return <OriginalComponent nameLogger={this.handleNameLogger()}/>;
      }
    })
}
