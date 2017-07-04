import { createSelector } from 'reselect';

const selectGame = state => state.get('game');

const makeSelectGameNivelId = () => createSelector(
    selectGame,
    (gameState) => gameState.get('gameNivelId')
);

const makeSelectGameNivel = () =>  createSelector(
    selectGame,
    makeSelectGameNivelId(),
    (gameState, gameNivelId) => gameState.get('nivels').find( obj => {
        return obj.get('id') === gameNivelId;
    })
);

const makeSelectGameNivelPath = () => createSelector(
    makeSelectGameNivel(),
    gameNivel => gameNivel.get('path')
);

const makeSelectGameNivelInstructions = () => createSelector(
    makeSelectGameNivel(),
    gameNivel => gameNivel.get('instructions')
);

export {
    selectGame,
    makeSelectGameNivel,
    makeSelectGameNivelId,
    makeSelectGameNivelPath,
    makeSelectGameNivelInstructions
};
