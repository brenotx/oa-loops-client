import { combineReducers } from 'redux-immutable';
import InstructionReducer from './instructions_reducer';
import gameReducer from './reducer_nivel';


// TODO: Better reducers name
const rootReducer = combineReducers({
    instructionReducer: InstructionReducer,
    game: gameReducer
});

export default rootReducer;
