import { List, Map } from 'immutable';

import { ADD_INSTRUCTION,
         REMOVE_INSTRUCTION,
         SET_SELECTEDBOX } from '../actions/index'

const initialState = Map({
    selectedBox: 'main',
    instructions: List([ 'arrow-right', 'repeat', 'arrow-up' ]),
    mainInstructions: List(),
    progInstructions: List()
});

// TODO: Apply TRY principles
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_INSTRUCTION:
            if (state.get('selectedBox') === 'main') {
                return state = state.update('mainInstructions', list => list.push(action.instruction));
            } else if (state.get('selectedBox') === 'prog') {
                return state = state.update('progInstructions', list => list.push(action.instruction));
            }
            // return state.set('mainInstructions', state.get('mainInstructions').push(action.instruction));

        case REMOVE_INSTRUCTION:
            if (state.get('selectedBox') === 'main') {
                return state.set('mainInstructions', state.get('mainInstructions').delete(action.idx));
            } else if (state.get('selectedBox') === 'prog') {
                return state.set('progInstructions', state.get('progInstructions').delete(action.idx));
            }

        case SET_SELECTEDBOX:
            return state.set('selectedBox', action.boxName);

        default:
             return state;
    }
}

// https://facebook.github.io/immutable-js/docs/#/Map
// const aMap = Map({ nestedList: List([ 1, 2, 3 ]) })
// const newMap = aMap.update('nestedList', list => list.push(4))
// Map { "nestedList": List [ 1, 2, 3, 4 ] }
