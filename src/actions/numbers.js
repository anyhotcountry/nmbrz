import { DRAG_STOP, PLACE_NUMBER, ROTATE_NUMBER } from '../actions/types';

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

