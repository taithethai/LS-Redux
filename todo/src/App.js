import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import AddNewTodo from './AddNewTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Todo />
        <AddNewTodo />
      </div>
    );
  }
}

export default App;
