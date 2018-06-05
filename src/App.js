import React, { Component } from 'react';
import GameList from './components/GameList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';

const theme = createMuiTheme({});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <GameList {...this.props} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
