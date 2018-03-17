export const PLACE_NUMBER = 'PLACE_NUMBER';
export const ROTATE_NUMBER = 'ROTATE_NUMBER';
export const DRAG_STOP = 'DRAG_STOP';
export const SHUFFLE_NUMBERS = 'SHUFFLE_NUMBERS';
export const UNDO_MOVE = 'UNDO_MOVE';
export const REDO_MOVE = 'REDO_MOVE';
export const CLEAR_UNDO_HISTORY = 'CLEAR_UNDO_HISTORY';

export function clearHistory () {
  return {
    type: CLEAR_UNDO_HISTORY
  };
}

export function shuffleNumbers () {
  return {
    type: SHUFFLE_NUMBERS
  };
}

export function placeNumber () {
  return {
    type: PLACE_NUMBER
  };
}

export function rotateNumber () {
  return {
    type: ROTATE_NUMBER
  };
}

export function onStop (x, y) {
  return {
    type: DRAG_STOP,
    x,
    y
  };
}

export function undoMove () {
  return {
    type: UNDO_MOVE
  };
}

export function redoMove () {
  return {
    type: REDO_MOVE
  };
}
