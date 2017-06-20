import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from "redux-form";


import InstructionReducer from './instructions_reducer';
import gameReducer from './reducer_nivel';
import codeReducer from '../containers/Code/reducer';
import authReducer from '../containers/auth/reducer';


// TODO: Better reducers name
const rootReducer = combineReducers({
    instructionReducer: InstructionReducer,
    game: gameReducer,
    code: codeReducer,
    auth: authReducer,
    form: formReducer
});

export default rootReducer;
