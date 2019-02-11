import React, { Component } from 'react';
import './App.css';

// Customisable Context Paramaters Example
import CustomEnvContext from './context/CustomEnvContext'
import CustomEnvDataBlock from './components/CustomEnvDataBlock'

// Externally Defined Context Paramaters Example
import {EnvContextProvider} from './context/EnvContext'
import EnvDataBlock from './components/EnvDataBlock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Context Here</h1>

        <hr />
        <CustomEnvContext.Provider value={
          { type: 'non-prod', name: 'UAT Environment' }
        }>
          <p>CustomEnvContext.js: Example of context parameters set within the App root</p>
          <CustomEnvDataBlock/>
        </CustomEnvContext.Provider>
        <hr />
        <EnvContextProvider>
          <p>EnvContext.js: Example of context parameters set externally</p>
          <EnvDataBlock/>
        </EnvContextProvider>
        <hr />


      </div>
    );
  }
}

export default App;

