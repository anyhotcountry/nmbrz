import { DRAG_STOP, PLACE_NUMBER, ROTATE_NUMBER, SHUFFLE_NUMBERS, UNDO_MOVE, REDO_MOVE, CLEAR_UNDO_HISTORY, SIZE } from '../actions/numbers';

/* Undoable setup */
import undoable, { includeAction } from 'redux-undo';

// Cards state is an array of 52 objects of form {name, location}
const makeStack = () => {
    let stack = [];
    for (let i = 0; i < SIZE; i++) {
        stack.push({ key: i, name: 'nmbr' + Math.floor(i / 2), placed: false, active: false, destination: { x: 0, y: 0 }, rotation: 0 });
    }
    return stack;
}

const initialState = makeStack();

const shuffle = (unshuffled, sequence) => {
    const shuffled = sequence.map(i => unshuffled[i]);
    shuffled[0].active = true;
    return shuffled;
}

export const numbers = (state = initialState, action) => {
    switch (action.type) {
        case SHUFFLE_NUMBERS:
            return shuffle(makeStack(), action.sequence);
        case PLACE_NUMBER: {
            let index = state.findIndex(n => n.active);
            if (index === -1) {
                return state;
            }
            return state.map((n, i) => ({
                ...n,
                placed: i <= index,
                active: i === index + 1
            }));
        }
        case ROTATE_NUMBER: {
            let index = state.findIndex(n => n.active);
            if (index === -1) {
                return state;
            }
            return state.map((n, i) => ({
                ...n,
                rotation: i === index ? n.rotation + 0.5 * Math.PI : n.rotation
            }));
        }
        case DRAG_STOP: {
            let index = state.findIndex(n => n.active);
            if (index === -1) {
                return state;
            }
            return state.map((n, i) => ({
                ...n,
                destination: i === index ? { x: action.x, y: action.y } : n.destination,
                rotation: i === index && n.destination.x === action.x && n.destination.y === action.y ? n.rotation + 0.5 * Math.PI : n.rotation
            }));
        }
        default:
            return state;
    }
}

const undoConfig = {
    filter: includeAction([PLACE_NUMBER]),
    limit: 50,
    undoType: UNDO_MOVE,
    redoType: REDO_MOVE,
    clearHistoryType: CLEAR_UNDO_HISTORY
};

export default undoable(numbers, undoConfig);
