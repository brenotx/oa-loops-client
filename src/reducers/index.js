import { combineReducers } from 'redux';
import InstructionReducer from './instructions_reducer';

const rootReducer = combineReducers({
    instructionReducer: InstructionReducer
});

export default rootReducer;
