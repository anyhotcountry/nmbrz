import React, { Component } from 'react';
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board {...this.props} /> 
      </div>
    );
  }
}

export default App;
