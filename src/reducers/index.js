import { combineReducers } from 'redux-immutable';
import InstructionReducer from './instructions_reducer';
import NivelReducer from './reducer_nivel';


// TODO: Better reducers name
const rootReducer = combineReducers({
    instructionReducer: InstructionReducer,
    nivelReducer: NivelReducer
});

export default rootReducer;
