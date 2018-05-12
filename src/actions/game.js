import database, {TIMESTAMP} from './database';

import { NEW_GAME, GAME_ADDED } from '../actions/types';

export const watchGameAddedEvent = (dispatch) => {
  database.ref('/games').on('child_added', (snap) => {
    dispatch(getGameAddedAction(snap.val()));
  });
}

const getGameAddedAction = (guest) => {
  return {
    type: GAME_ADDED,
    guest
  };
}

const newGameRejectedAction = () => {
  return {
    type: 'ActionTypes.AddToInviteRejected'
  }
}

const newGameFulfilledAction = ({ sequence, key }) => {
  return {
    type: NEW_GAME,
    sequence,
    key
  };
}
