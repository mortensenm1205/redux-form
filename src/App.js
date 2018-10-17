import React, { Component } from 'react';
import Inputs from './components/Inputs/';
import Display from './components/Display/';

class App extends Component {

  render() {
    return (
      <div>
        <Inputs  />
        <Display />
      </div>
    );
  }
}

export default App;
