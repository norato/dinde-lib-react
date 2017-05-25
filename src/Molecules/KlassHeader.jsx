import React, { Component } from 'react';

class KlassHeader extends Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.name}</h1>
      </div>
        
    );
  }
}

export default KlassHeader;