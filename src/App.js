import React, { Component } from 'react';
import GameList from './components/GameList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/Layout';
import ErrorSnackBar from './components/ErrorSnackBar';

const theme = createMuiTheme({});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <GameList {...this.props} />
          <ErrorSnackBar {...this.props} />
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
