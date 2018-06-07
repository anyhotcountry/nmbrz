import { combineReducers } from 'redux';
import numbers from './numbers';
import game from './game';
import error from './error';
import auth from './auth';

const rootReducer = combineReducers({
  numbers,
  game,
  error,
  auth
});

export default rootReducer;