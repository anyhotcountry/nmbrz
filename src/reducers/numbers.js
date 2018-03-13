import { PLACE_NUMBER, SHUFFLE_NUMBERS, UNDO_MOVE, REDO_MOVE, CLEAR_UNDO_HISTORY } from '../actions/numbers';

/* Undoable setup */
import undoable, { includeAction } from 'redux-undo';

// Cards state is an array of 52 objects of form {name, location}
function makeStack() {
    let stack = [];
    for (let index = 0; index < 10; index++) {
        stack.push({ name: 'nmbr' + index, placed: false, active: false });
        stack.push({ name: 'nmbr' + index, placed: false, active: false });
    }
    stack[0].placed = true;
    return stack;
}

const initialState = makeStack();

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function numbers(state = initialState, action) {
    switch (action.type) {
        case SHUFFLE_NUMBERS:
            return shuffle(initialState);
        case PLACE_NUMBER: {
            let newIndex = state.findIndex(n => n.active);
            return state.map((number, i) => ({
                    name: number.name,
                    placed: number.active,
                    active: newIndex !== -1 && i === newIndex + 1
                }));
        }
        default:
            return state;
    }
}

let undoConfig = {
    filter: includeAction([PLACE_NUMBER]),
    limit: 20,
    undoType: UNDO_MOVE,
    redoType: REDO_MOVE,
    clearHistoryType: CLEAR_UNDO_HISTORY
};

export default undoable(numbers, undoConfig);
