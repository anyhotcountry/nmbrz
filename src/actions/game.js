import database, { TIMESTAMP, firebaseAuth } from './database';

import { NEW_GAME, GAMES_ADDED, SIZE, WATCH_GAME, JOIN_GAME, SHOW_ERROR } from '../actions/types';

export const watchGamesAddedEvent = () => {
  return dispatch => {
    database.ref('/games').on('child_added', (snap) => {
      dispatch(gamesAddedAction([snap.val()]));
    });
  }
}

const gamesAddedAction = (games) => {
  return {
    type: GAMES_ADDED,
    payload: games
  };
}

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
    const { uid : userId, displayName  } = firebaseAuth.currentUser;
    const gamesRef = database.ref('/games');
    key = gamesRef.push().key;
    gamesRef.push({
      key,
      date: TIMESTAMP,
      sequence,
      ownerId: userId,
      ownerName: displayName,
      players: [
        { userId, displayName  }
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

export const joinGame = key => {
  return {
    type: JOIN_GAME,
    payload: key
  };
}

export const watchGame = key => {
  return {
    type: WATCH_GAME,
    payload: key
  };
}

const newGameRejectedAction = () => {
  return {
    type: SHOW_ERROR,
    payload: 'Adding new game failed'
  }
}

const newGameFulfilledAction = ({ sequence, key }) => {
  return {
    type: NEW_GAME,
    sequence,
    key
  };
}
