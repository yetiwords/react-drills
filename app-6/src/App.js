import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasksArray: [],
      userInput: '',
    }
    this.clickHandler = this.clickHandler.bind(this)

  }
  inputHandler(val) {
    this.setState({ userInput: val })
  }
  clickHandler() {
  let copyArr = this.state.tasksArray
  copyArr.unshift(this.state.userInput)
  this.setState({ tasksArray: copyArr, userInput: ''})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Dank List!</h1>
          </div>
          <input onChange={(e) => this.inputHandler(e.target.value)} placeholder="Enter New Task" value={this.state.userInput}></input>
          <button onClick={() => this.clickHandler()}>Add</button>
          <Todo list={this.state.tasksArray}/>
      </div>
    );
  }
}

export default App;
