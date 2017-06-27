import { fromJS } from 'immutable';

import {
    SET_USER_PATH,
    RESET_USER_PATH,
    FETCH_NIVEL_STATS
} from './constants';

const initialState = fromJS({
    userPath: [],
    nivelStats: []
});


function codeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_PATH:
            return state.set('userPath', state.get('userPath').push(action.userPath));
        case RESET_USER_PATH:
            return state.set('userPath', fromJS([]));
        case FETCH_NIVEL_STATS:
            return state.set('nivelStats', action.payload)
        default:
            return state;
    }
}

export default codeReducer;