import { fromJS } from 'immutable';

import { FETCH_USER_MAX_NIVEL } from './constants';

const initialState = fromJS({
    gameNivelId: 0,
    userMaxNivel: 0,
    nivels: [
        {
            id: 0,
            path: [ "20", "21", "22", "23", "24" ],
            instructions: [ 'arrow-right'],
        },
        {
            id: 1,
            path: [ "20", "21", "31", "32", "33", "34" ],
            instructions: [ 'arrow-right', 'repeat', 'arrow-up', 'arrow-down', 'arrow-left' ]
        },
        {
            id: 2,
            path: [ "20", "21", "31", "32", "33", "23", "24" ],
            instructions: [ 'arrow-right', 'repeat', 'arrow-up', 'arrow-down', 'arrow-left' ]
        }
    ]
});


function nivelPageReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_MAX_NIVEL:
            return state.set('userMaxNivel', action.payload.maxNivel);
        default:
            return state;
    }
}

export default nivelPageReducer;
