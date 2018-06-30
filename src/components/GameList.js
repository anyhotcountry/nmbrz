import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LaunchIcon from '@material-ui/icons/Launch';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

class GameList extends Component {
  render() {
    const { games, classes, watchGame, joinGame } = this.props;
    return (
      <div className={classes.root}>
        <List>
          {games.map(game => (
            <ListItem
              key={game.key}
              role={undefined}
              button
              className="listItem"
              onClick={watchGame(game.key)}
            >
              <ListItemText primary={`Started by ${game.ownerName}`} secondary={"on " + new Date(game.date).toDateString()} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Join Game" onClick={joinGame(game.key)}>
                  <LaunchIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button variant="fab" color="secondary" className={classes.fab} onClick={this.props.newGame}>
          <AddIcon />
        </Button>
      </div>
    );
  }

  componentDidMount() {
    const { watchGamesAddedEvent } = this.props;
    watchGamesAddedEvent();
  }
}

GameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired
  })).isRequired,
  watchGamesAddedEvent: PropTypes.func.isRequired,
};

export default withStyles(styles)(GameList);