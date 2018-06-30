import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/types';

const initialState = {
    authenticated: false,
    userId: null,
    displayName: null,
    photoURL: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                authenticated: true,
                userId: action.payload.uid,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL
            }
        case SIGN_OUT_SUCCESS:
        return {
            authenticated: false
        }
    default:
            return state;
    }
}

export default auth;
