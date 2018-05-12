import { NEW_GAME } from '../actions/types';

const initialState = {};

export const game = (state = initialState, action) => {
    switch (action.type) {
        case NEW_GAME:
            return state;
        default:
            return state;
    }
}

export default game;
