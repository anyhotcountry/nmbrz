import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as numberActionCreators from '../actions/numbers';
import * as gameActionCreators from '../actions/game';
import * as errorActionCreators from '../actions/error';

import App from '../App';

const mapStateToProps = state => ({
  numberData: state.numbers,
  games: state.game,
  error: state.error
});

const mapDispatchToProps = dispatch => {
  let allActionCreators = Object.assign({},
    numberActionCreators, gameActionCreators, errorActionCreators);
  return bindActionCreators(allActionCreators, dispatch);
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;
