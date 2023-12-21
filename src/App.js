import React, { Component } from 'react';
import './App.css';
import TodoList from './Components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React Project</h2>
          <h3>Welcome to TodoList</h3>
        </div>
        <TodoList/>
      </div>
    );
  }
}

export default App;