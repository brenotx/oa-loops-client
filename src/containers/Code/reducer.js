import { fromJS } from 'immutable';

import { SET_USER_PATH, RESET_USER_PATH } from './constants';

const initialState = fromJS({
    userPath: []
});


function codeReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_PATH:
            return state.set('userPath', state.get('userPath').push(action.userPath));
        case RESET_USER_PATH:
            return state.set('userPath', fromJS([]));
        default:
            return state;
    }
}

export default codeReducer;