import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/types';

const initialState = {
    authenticated: false,
    user: null,
    key: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {
                authenticated: !!action.payload,
                id: action.payload ? action.payload.uid : null
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
