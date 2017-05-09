import { List, Map } from 'immutable';

import { ADD_INSTRUCTION,
         REMOVE_INSTRUCTION,
         SET_SELECTEDBOX,
         RESET_APP,
         SET_REPEAT } from '../actions/index';

// TODO: Use fromJS
const initialState = Map({
    selectedBox: 'main',
    repeatProg: 1,
    mainInstructions: List(),
    progInstructions: List()
});

// TODO: Apply TRY principle
export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_INSTRUCTION:
            if (state.get('selectedBox') === 'main') {
                return state.update('mainInstructions', list => list.push(action.instruction));
            } else if (state.get('selectedBox') === 'prog') {
                return state.update('progInstructions', list => list.push(action.instruction));
            }
            break;

        case REMOVE_INSTRUCTION:
            if (state.get('selectedBox') === 'main') {
                return state.set('mainInstructions', state.get('mainInstructions').delete(action.idx));
            } else if (state.get('selectedBox') === 'prog') {
                return state.set('progInstructions', state.get('progInstructions').delete(action.idx));
            }
            break;

        case SET_SELECTEDBOX:
            return state.set('selectedBox', action.boxName);

        case SET_REPEAT:
            return state.set('repeatProg', action.value);

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
