import { createSelector } from 'reselect';

const selectInstructions = state => state.get('instructionReducer');
const selectCode = state => state.get('code');
// const selectAuth = state => state.get('auth');

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

const makeSelectUserPath = () => createSelector(
    selectCode,
    (codeState) => codeState.get('userPath')
);

const makeSelectNivelStats = () => createSelector(
    selectCode,
    (codeState) => codeState.get('nivelStats')
);

// const makeSelectUserID = () => createSelector(
//     selectAuth,
//     (authState) => authState.get('user_id')
// );

export {
    selectInstructions,
    makeSelectMainInstructions,
    makeSelectProgInstructions,
    makeSelectActiveBox,
    makeSelectProgRepeat,
    selectCode,
    makeSelectUserPath,
    makeSelectNivelStats
    // selectAuth,
    // makeSelectUserID
};