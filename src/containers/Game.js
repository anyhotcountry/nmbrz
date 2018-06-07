import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as numberActionCreators from '../actions/numbers';
import * as gameActionCreators from '../actions/game';
import * as errorActionCreators from '../actions/error';
import * as authActionCreators from '../actions/auth';

import App from '../App';

const mapStateToProps = state => ({
  numberData: state.numbers,
  games: state.game,
  error: state.error,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  let allActionCreators = Object.assign({},
    numberActionCreators, 
    gameActionCreators, 
    errorActionCreators, 
    authActionCreators);
  return bindActionCreators(allActionCreators, dispatch);
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;
