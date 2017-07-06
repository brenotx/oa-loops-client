import { fromJS } from 'immutable';

import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './constants';

const initialState = fromJS({
    error: '',
    authenticated: false,
    user_id: '',
    message: ''
});

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTH_USER:
            return state.merge({
                'authenticated': true,
                'user_id': action.payload
            });
        case UNAUTH_USER:
            return state.set('authenticated', false);
        case AUTH_ERROR:
            return state.set('error', action.payload);
        case FETCH_MESSAGE:
            return state.set('message', action.payload);
        default:
            return state;
    }
}
