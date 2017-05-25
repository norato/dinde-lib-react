import React, { Component } from 'react';

class KlassMethod extends Component {
  render() {
    return (
      <div>
        {this.props.method.accessType} {this.props.method.name}(): {this.props.method.returnType}
      </div>       
    );
  }
}

export default KlassMethod;