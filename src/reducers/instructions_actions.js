import { List } from 'immutable';

import { ADD_INSTRUCTION, REMOVE_INSTRUCTION } from '../actions/index'

export default function(state = List(), action) {
    // console.log(state);
    switch (action.type) {
        case ADD_INSTRUCTION:
            // return state.concat([ action.instruction ]);
            // return [ ...state, action.instruction ];
            return List([ ...state ]).push(action.instruction);
        case REMOVE_INSTRUCTION:
            return List([ ...state ]).delete(action.idx);
    }
    return state;
}
