import database, {TIMESTAMP} from './database';

import { DRAG_STOP, PLACE_NUMBER, ROTATE_NUMBER, NEW_GAME, SIZE } from '../actions/types';

const randomSequence = (n) => {
  const sequence = [];
  for (let index = 0; index < n; index++) {
    sequence.push({ index, random: Math.random() });
  }
  return sequence.sort((a, b) => a.random - b.random).map(x => x.index);
}

export const newGame = name => {
  const sequence = randomSequence(SIZE);
  let key = "";
  return dispatch => {
    const gamesRef = database.ref('/games');
    key = gamesRef.push().key;
    gamesRef.push({
      key,
      date: TIMESTAMP,
      sequence,
      players: [
        { name: "Chris" }
      ]
    })
      .then(() => {
        dispatch(newGameFulfilledAction({ sequence, key }));
      })
      .catch((error) => {
        dispatch(newGameRejectedAction());
      });
  }
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

export const placeNumber = () => {
  return {
    type: PLACE_NUMBER
  };
}

export const rotateNumber = () => {
  return {
    type: ROTATE_NUMBER
  };
}

export const onStop = (x, y) => {
  return {
    type: DRAG_STOP,
    x,
    y
  };
}

