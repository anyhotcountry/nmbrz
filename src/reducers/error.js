import { CLOSE_ERROR, SHOW_ERROR } from '../actions/types';

const initialState = null;

export const error = (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_ERROR:
            return null;
        case SHOW_ERROR:
            return action.payload;
        default:
            return state;
    }
}

export default error;
