import { Map } from 'immutable';

// Actions
export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION';
export const SET_SELECTEDBOX = 'SET_SELECTEDBOX';
export const RESET_APP = 'RESET_APP';

// App
export const VALID_MOVES = Map({
     "arrow-right": 1,
     "arrow-left": -1,
     "arrow-down": 10,
     "arrow-up": -10
});
