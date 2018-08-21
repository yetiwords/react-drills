import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        'pasta',
        'mac & cheese',
        'pb&j',
        'pb&j'
            ]
    }
  }
  render() {
    let displayList = this.state.list.map((e, i) => {
      return (
        <h2 key={i}>{e}</h2>
      )
    })
    return (
      <div className="App">
        {displayList}

      </div>
    );
  }
}

export default App;
