import { combineReducers } from 'redux-immutable';
import InstructionReducer from './instructions_reducer';
import gameReducer from './reducer_nivel';
import codeReducer from '../containers/Code/reducer';


// TODO: Better reducers name
const rootReducer = combineReducers({
    instructionReducer: InstructionReducer,
    game: gameReducer,
    code: codeReducer
});

export default rootReducer;
