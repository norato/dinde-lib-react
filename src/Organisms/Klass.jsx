import React, { Component } from 'react';
import KlassHeader from '../Molecules/KlassHeader';
import KlassAttribute from '../Atoms/KlassAttribute';
import KlassMethod from '../Atoms/KlassMethod';

class Klass extends Component {
 
  renderAttributes() {
    return this.props.klass.attributes.map(
      attribute => {
        return <KlassAttribute key={attribute.name} attribute={attribute}></KlassAttribute>
      }
    )
  }

  renderMethods() {
    return this.props.klass.methods.map(
      method => {
        return <KlassMethod key={method.name} method={method}></KlassMethod>
      }
    )
  }

 
  render() {
    const attributes = this.renderAttributes();
    const methods = this.renderMethods();

    return (
      <div className="classElement">
        <KlassHeader name={this.props.klass.name}></KlassHeader>
        <div className="classAttrs">
          {attributes}
        </div>
        <div className="classMethods">
          {methods}
        </div>
      </div>
    );
  }
}

export default Klass;