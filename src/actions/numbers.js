export const PLACE_NUMBER = 'PLACE_NUMBER';
export const ROTATE_NUMBER = 'ROTATE_NUMBER';
export const DRAG_STOP = 'DRAG_STOP';
export const SHUFFLE_NUMBERS = 'SHUFFLE_NUMBERS';
export const UNDO_MOVE = 'UNDO_MOVE';
export const REDO_MOVE = 'REDO_MOVE';
export const CLEAR_UNDO_HISTORY = 'CLEAR_UNDO_HISTORY';
export const SIZE = 20;

const randomSequence = (n) => {
  const sequence = [];
  for (let index = 0; index < n; index++) {
    sequence.push({ index, random: Math.random() });
  }
  return sequence.sort((a, b) => a.random - b.random).map(x => x.index);
}

export const shuffleNumbers = () => {
  return {
    type: SHUFFLE_NUMBERS,
    sequence: randomSequence(SIZE)
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

export const undoMove = () => {
  return {
    type: UNDO_MOVE
  };
}

export const redoMove = () => {
  return {
    type: REDO_MOVE
  };
}

export const clearHistory = () => {
  return {
    type: CLEAR_UNDO_HISTORY
  };
}
