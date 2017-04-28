import { combineReducers } from 'redux';
import InstructionsReducer from './instructions_reducer';
import MainInstructionsReducer from './instructions_actions';

const rootReducer = combineReducers({
    instructions: InstructionsReducer,
    mainInstructions: MainInstructionsReducer
});

export default rootReducer;
