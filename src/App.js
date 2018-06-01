import React, { Component } from 'react';
import Board from './components/Board';
import GameList from './components/GameList';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <GameList {...this.props} />
      </MuiThemeProvider>
    );
  }
}

export default App;
