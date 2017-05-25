import React, { Component } from 'react';

class KlassAttribute extends Component {
  render() {
    return (
      <div>
        {this.props.attribute.accessType} {this.props.attribute.name}: {this.props.attribute.returnType}
      </div>       
    );
  }
}

export default KlassAttribute;