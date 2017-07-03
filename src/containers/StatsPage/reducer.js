import { fromJS } from 'immutable';

import { FETCH_NIVELS_STATS } from './constants';

const initialState = fromJS({
    nivelsStats: []
});


function statsPageReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NIVELS_STATS:
            return state.set('nivelsStats', action.payload);
        default:
            return state;
    }
}

export default statsPageReducer;
