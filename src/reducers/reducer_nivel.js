import { fromJS } from 'immutable';

import { NEXT_NIVEL } from '../actions/index';

const initialState = fromJS({
    gameNivelId: 0,
    nivels: [
        {
            id: 0,
            path: [ "20", "21", "22", "23", "24" ],
            instructions: [ 'arrow-right'],
            stats: {
                correctAnwsers: 0,
                wrongAnwsers: 0
            }
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


// Game reducer
export default function(state = initialState, action) {
    switch (action.type) {
        case NEXT_NIVEL:
            return state.set('gameNivelId', state.get('gameNivelId') + 1); 
        default:
            return state;
    }
}