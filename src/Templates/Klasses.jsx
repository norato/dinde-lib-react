import React, { Component } from 'react';
import Klass from '../Organisms/Klass';

class Klasses extends Component {
 
  renderKlasses(){
    return this.props.klasses.map(
      klass => {
        return <Klass key={klass.name} klass={klass}></Klass>
      }
    )
  }
  
  render() {
    const renderKlasses = this.renderKlasses();
    return (
      <div>
        {renderKlasses}
      </div>      
    );
  }
}

export default Klasses;