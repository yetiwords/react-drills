import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        'pasta',
        'pickle',
        'salsa',
        'lemon',
        'humus',
        'soda'
      ],
        userInput: '',
        updatedList: [],
      }
      this.update = this.update.bind(this);
    

    }
    update(val) {
      let shallowCopy = this.state.list.filter((e)=> e.includes(val))
      this.setState({updatedList: shallowCopy})
    }
  
      render() {
        let displayList = this.state.list.map((e, i) => {
          return (
            <h2 key={i}>{e}</h2>
          )
        }
      )
        let updated = this.state.updatedList.map((e, i) => {
          return (
            <h2 key={i}>{e}</h2>
          )
        }
      )

      
    return (
      <div className="App">
      <br />
      <input onChange={(e) => {this.update(e.target.value)}}></input>
        <div className="App">{this.state.updatedList.length ? updated : displayList}</div>
      </div>
    );
  }
}

export default App
