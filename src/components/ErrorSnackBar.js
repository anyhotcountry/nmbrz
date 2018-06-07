import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class ErrorSnackBar extends React.Component {
  render() {
    const { classes, handleErrorClose, error  } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={error != null}
        autoHideDuration={6000}
        onClose={handleErrorClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={
          <span id="client-snackbar" className={classes.message}>
            <ErrorIcon />
            {error}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={handleErrorClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

ErrorSnackBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ErrorSnackBar);