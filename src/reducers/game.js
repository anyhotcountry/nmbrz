import { NEW_GAME, GAMES_ADDED } from '../actions/types';

const initialState = [];

export const game = (state = initialState, action) => {
    switch (action.type) {
        case GAMES_ADDED:
            return [...state, ...action.payload];
        default:
            return state;
    }
}

export default game;
