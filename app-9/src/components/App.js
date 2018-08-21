import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Books</a></li>
          </ul>
          <hr/>
          <Route path="/Home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
      </div>
  </div>
  </Router>
    );
  }
}
export default App;