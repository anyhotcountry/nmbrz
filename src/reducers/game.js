import { NEW_GAME } from '../actions/types';

const initialState = ["Game 1", "Game 2", "Game 3"];

export const game = (state = initialState, action) => {
    switch (action.type) {
        case NEW_GAME:
            return state;
        default:
            return state;
    }
}

export default game;
