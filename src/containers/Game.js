import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as numberActionCreators from '../actions/numbers';
import * as gameActionCreators from '../actions/game';

import App from '../App';

const mapStateToProps = state => ({
  numberData: state.numbers,
  games: state.game
});

const mapDispatchToProps = dispatch => {
  let allActionCreators = Object.assign({},
    numberActionCreators, gameActionCreators);
  return bindActionCreators(allActionCreators, dispatch);
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;
