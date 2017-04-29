import { List, Map } from 'immutable';

import { ADD_INSTRUCTION, REMOVE_INSTRUCTION } from '../actions/index'

const initialState = Map({
    selectedBox: '',
    instructions: List([ 'arrow-right', 'repeat', 'arrow-up' ]),
    mainInstructions: List(),
    progInstructions: List()
});

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_INSTRUCTION:
            // return state.set('mainInstructions', state.get('mainInstructions').push(action.instruction));
            return state = state.update('mainInstructions', list => list.push(action.instruction));
        case REMOVE_INSTRUCTION:
            return state.set('mainInstructions', state.get('mainInstructions').delete(action.idx));
        default:
             return state;
    }
}

// https://facebook.github.io/immutable-js/docs/#/Map
// const aMap = Map({ nestedList: List([ 1, 2, 3 ]) })
// const newMap = aMap.update('nestedList', list => list.push(4))
// Map { "nestedList": List [ 1, 2, 3, 4 ] }
