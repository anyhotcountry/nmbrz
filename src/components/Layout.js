
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class Layout extends Component {
  render() {
    const { classes, signInWithGoogle, signOut, auth } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              NMBRZ
          </Typography>
            {auth.authenticated ||
              <Button color="inherit" onClick={signInWithGoogle}>Login</Button>
            }
            {auth.authenticated &&
              <Button color="inherit" onClick={signOut}>Logout</Button>
            }
          </Toolbar>
        </AppBar>
        {auth.authenticated && this.props.children}
      </div>
    );
  }

  componentDidMount() {
    const { onAuthStateChanged } = this.props;
    onAuthStateChanged();
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Layout);
