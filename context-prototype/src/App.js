import React, { Component } from 'react';
import './App.css';

import EnvironmentProvider from './context/Environment'
import DataBlock from './components/DataBlock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Context Here</h1>
        <DataBlock/>
      </div>
    );
  }
}

export default App;
