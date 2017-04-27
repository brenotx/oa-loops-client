import { combineReducers } from 'redux';
import InstructionsReducer from './instructions_reducer';

const rootReducer = combineReducers({
    instructions: InstructionsReducer
});

export default rootReducer;

// import { List, Map } from 'immutable';
// import { ADD_INSTRUCTION } from '../actions';
//
// export default function(state = null, action) {
//     switch (action.type) {
//         case ADD_INSTRUCTION:
//             return action.payload;
//     }
//     return state;
// }
