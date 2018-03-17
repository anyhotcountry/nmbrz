import { DRAG_STOP, PLACE_NUMBER, ROTATE_NUMBER, SHUFFLE_NUMBERS, UNDO_MOVE, REDO_MOVE, CLEAR_UNDO_HISTORY } from '../actions/numbers';

/* Undoable setup */
import undoable, { includeAction } from 'redux-undo';

// Cards state is an array of 52 objects of form {name, location}
function makeStack() {
    let stack = [];
    for (let i = 0; i < 20; i++) {
        stack.push({ key: i, name: 'nmbr' + Math.floor(i / 2), placed: false, active: false, destination: { x: 0, y: 0 }, rotation: 0 });
    }
    return stack;
}

const initialState = makeStack();

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    array[0].active = true;
    return array;
}

function numbers(state = initialState, action) {
    switch (action.type) {
        case SHUFFLE_NUMBERS:
            return shuffle(makeStack());
        case PLACE_NUMBER: {
            let index = state.findIndex(n => n.active);
            if (index === -1) {
                return state;
            }
            return state.map((n, i) => ({
                key: n.key,
                name: n.name,
                placed: i <= index,
                active: i === index + 1,
                destination: n.destination,
                rotation: n.rotation
            }));
        }
        case ROTATE_NUMBER: {
            let index = state.findIndex(n => n.active);
            if (index === -1) {
                return state;
            }
            return state.map((n, i) => ({
                key: n.key,
                name: n.name,
                placed: n.placed,
                active: n.active,
                destination: n.destination,
                rotation: i === index ? n.rotation + 0.5 * Math.PI : n.rotation
            }));
        }
        case DRAG_STOP: {
            let index = state.findIndex(n => n.active);
            if (index === -1) {
                return state;
            }
            return state.map((n, i) => ({
                key: n.key,
                name: n.name,
                placed: n.placed,
                active: n.active,
                destination: i === index ? { x: action.x, y: action.y } : n.destination,
                rotation: n.rotation
            }));
        }
        default:
            return state;
    }
}

let undoConfig = {
    filter: includeAction([PLACE_NUMBER]),
    limit: 50,
    undoType: UNDO_MOVE,
    redoType: REDO_MOVE,
    clearHistoryType: CLEAR_UNDO_HISTORY
};

export default undoable(numbers, undoConfig);
