import React, { Component } from 'react';
import Board from './components/Board'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Board {...this.props} />
      </MuiThemeProvider>
    );
  }
}

export default App;
