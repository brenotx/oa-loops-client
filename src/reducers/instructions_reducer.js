import { List, Map } from 'immutable';

import { ADD_INSTRUCTION,
         REMOVE_INSTRUCTION,
         SET_ACTIVE_BOX,
         RESET_APP,
         SET_PROG_REPEAT } from '../actions/index';

// TODO: Use fromJS
const initialState = Map({
    activeBox: 'main',
    progRepeat: 1,
    mainInstructions: List(),
    progInstructions: List()
});

// TODO: Apply TRY principle
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_INSTRUCTION:
            if (state.get('activeBox') === 'main') {
                return state.update('mainInstructions', list => list.push(action.instruction));
            } else if (state.get('activeBox') === 'prog') {
                return state.update('progInstructions', list => list.push(action.instruction));
            }
            break;

        case REMOVE_INSTRUCTION:
            if (state.get('activeBox') === 'main') {
                return state.set('mainInstructions', state.get('mainInstructions').delete(action.idx));
            } else if (state.get('activeBox') === 'prog') {
                return state.set('progInstructions', state.get('progInstructions').delete(action.idx));
            }
            break;

        case SET_ACTIVE_BOX:
            return state.set('activeBox', action.boxName);

        case SET_PROG_REPEAT:
            return state.set('progRepeat', action.value);

        case RESET_APP:
            return initialState;

        default:
             return state;
    }
}

// https://facebook.github.io/immutable-js/docs/#/Map
// const aMap = Map({ nestedList: List([ 1, 2, 3 ]) })
// const newMap = aMap.update('nestedList', list => list.push(4))
// Map { "nestedList": List [ 1, 2, 3, 4 ] }
