import { DRAG_STOP, PLACE_NUMBER, ROTATE_NUMBER, NEW_GAME, SIZE } from '../actions/types';

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
        case NEW_GAME:
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

export default numbers;
