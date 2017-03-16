import types from '../actions/types';

export default function (state={}, action) {
    switch(action.type) {
        case types.AUTH_USER:
            return {...state, authenticated: true };

        case types.UNAUTH_USER:
            console.log('unauth');
            return {...state, authenticated: false };

        case types.AUTH_ERROR:
            return {...state, error: action.payload};

        default:
            return state;
    }
    
}