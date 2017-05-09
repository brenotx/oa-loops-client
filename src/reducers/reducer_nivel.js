import { fromJS } from 'immutable';

import { NEXT_NIVEL } from '../actions/index';

const initialState = fromJS({
    currentNivelId: 0,
    gameNivel: [
        {
            id: 0,
            path: [ "20", "21", "22", "23", "24" ],
            instuctions: [ 'arrow-right' ]
        },
        {
            id: 1,
            path: [ "20", "21", "31", "32", "33", "23", "24" ],
            instuctions: [ 'arrow-right', 'repeat', 'arrow-up', 'arrow-down', 'arrow-left' ]
        }
    ]
});

export default function(state = initialState, action) {
    switch (action.type) {
        case NEXT_NIVEL:
            return state.set('currentNivelId', 1); 
        default:
            return state;
    }
}