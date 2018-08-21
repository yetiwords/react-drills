import React, {Component} from 'react';
import List from './components/List';
import NewTask from './components/NewTask'
import Todo from './components/Todo'


export default class App extends Component {
constructor() {
  super();
  this.state = {
    list: ['eat', 'bills','code'],
    userInput: '',
  }
  this.inputHandler = this.inputHandler.bind(this);
  this.addTask = this.addTask.bind(this);
}

inputHandler(val) {
  this.setState({userInput: val.target.value})
}
addTask() {
  console.log('lol');
  
  const copyList = this.state.list.slice()
  copyList.unshift(this.state.userInput)
  this.setState({
    list:copyList,
    userInput:'',
  })
}

render() {
  return (
    <div>
      <Todo  list={this.state.list} userInput={this.state.userInput} />
      <NewTask list={this.state.list} 
               userInput={this.state.userInput}
               inputHandlerFn={this.inputHandler}
               addTaskFn={this.addTask}
                />
         </div>
    )
  }
}