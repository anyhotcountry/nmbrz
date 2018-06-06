import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/types';

const initialState = {
    authenticated: false,
    user: null,
    key: null
};

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return state;
        case SIGN_OUT_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default auth;
