import { combineReducers } from 'redux';
import InstructionReducer from './instructions_reducer';
import NivelReducer from './reducer_nivel';

const rootReducer = combineReducers({
    instructionReducer: InstructionReducer,
    nivelReducer: NivelReducer
});

export default rootReducer;
