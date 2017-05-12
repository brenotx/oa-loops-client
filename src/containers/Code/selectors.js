import { createSelector } from 'reselect';

const selectInstructions = state => state.get('instructionReducer');

const makeSelectMainInstructions = () => createSelector(
    selectInstructions,
    (instructionsState) => instructionsState.get('mainInstructions')
);

const makeSelectProgInstructions = () => createSelector(
    selectInstructions,
    (instructionsState) => instructionsState.get('progInstructions')
);

const makeSelectActiveBox = () => createSelector(
    selectInstructions,
    (instructionsState) => instructionsState.get('activeBox')
);

const makeSelectProgRepeat = () => createSelector(
    selectInstructions,
    (instructionsState) => instructionsState.get('progRepeat')
);


export {
    selectInstructions,
    makeSelectMainInstructions,
    makeSelectProgInstructions,
    makeSelectActiveBox,
    makeSelectProgRepeat
};