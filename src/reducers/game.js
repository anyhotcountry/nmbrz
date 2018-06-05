import { NEW_GAME, GAMES_ADDED } from '../actions/types';

const initialState = [];

export const game = (state = initialState, action) => {
    switch (action.type) {
        case GAMES_ADDED:
            return [...action.payload, ...state];
        default:
            return state;
    }
}

export default game;
