import { combineReducers } from 'redux';
import numbers from './numbers';
import game from './game';

const rootReducer = combineReducers({
  numbers,
  game
});

export default rootReducer;