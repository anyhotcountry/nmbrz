import { combineReducers } from 'redux';
import numbers from './numbers';
import game from './game';
import error from './error';

const rootReducer = combineReducers({
  numbers,
  game,
  error
});

export default rootReducer;