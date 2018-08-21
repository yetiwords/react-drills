import React, { Component } from 'react';
import './App.css';
import Image from './Image';
import pic from './imageFolder/link.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imageSource={pic} />
      </div>
    );
  }
}

export default App;
