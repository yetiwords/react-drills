import React, {Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: [],
    }
  }
  componentDidMount() {
    axios.get('https://swapi.co/api/people/').then(res => this.setState({characters: res.data.results}))
  }
  render() {
    console.log(this.state.characters)
    const list = this.state.characters.map((obj, index) => {
      return <h1 key={index}>{obj.name}</h1>
    })
    return (
        <div> 
        {list}
        </div>
    )
  }
}