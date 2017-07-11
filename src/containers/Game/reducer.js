import { fromJS } from 'immutable';

import { FETCH_NIVEL } from './constants';

const initialState = fromJS({
    id: 0,
    path: [],
    instructions: []
});

function gameReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NIVEL:
            return state.merge(action.payload);
        default:
            return state;
    }
}

export default gameReducer;
