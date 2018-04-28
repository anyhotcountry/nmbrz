import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as numberActionCreators from '../actions/numbers';

import App from '../App';

const mapStateToProps = state => ({
  numberData: state.numbers
});

const mapDispatchToProps = dispatch => {
  let allActionCreators = Object.assign({},
    numberActionCreators);
  return bindActionCreators(allActionCreators, dispatch);
};

const Game = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default Game;