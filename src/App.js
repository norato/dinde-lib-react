import React, { Component } from 'react';
import './App.css';
import Klasses from './Templates/Klasses';

class App extends Component {
  constructor() {
    super();
    this.state = {
      klasses: [
        {
          name: "Foo",
          attributes: [
            {
              accessType: "public",
              name: "bar",
              returnType: "string"
            },
            {
              accessType: "private",
              name: "bar2",
              returnType: "string"
            }
          ],
          methods: [
            {
              accessType: "public",
              name: "lol",
              returnType: "string"
            }
          ] 
        },
        {
          name: "Bar",
          attributes: [
            {
              accessType: "public",
              name: "bar",
              returnType: "string"
            },
            {
              accessType: "private",
              name: "bar2",
              returnType: "string"
            }
          ],
          methods: [
            {
              accessType: "public",
              name: "lol",
              returnType: "string"
            }
          ] 
        }
      ]
    }
  }
  render() {
    return (
      <Klasses klasses={this.state.klasses}></Klasses>
    );
  }
}

export default App;
