import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

import {
    selectGame,
    makeSelectGameNivel,
    makeSelectGameNivelId,
    makeSelectGameNivelPath,
    makeSelectGameNivelInstructions
} from '../selectors';

describe('selectGame', () => {
    it('selectGame should be defined', () => {
        expect(selectGame).toBeDefined();
    });

    it('should select the game state', () => {
        const gameState = fromJS({});
        const mockedState = fromJS({
            game: gameState
        });
        expect(selectGame(mockedState)).toEqual(gameState);
    });
});

describe('makeSelectGameNivelId', () => {
    const gameNivelIdSelector = makeSelectGameNivelId();
    it('should select the gameNivelId', () => {
        const gameNivelId = 0;
        const mockedState = fromJS({
            game: {
                gameNivelId: 0
            }
        });
        expect(gameNivelIdSelector(mockedState)).toEqual(gameNivelId);
    });
});

describe('makeSelectGameNivel', () => {
    const gameNivelSelector = makeSelectGameNivel();
    it('should select the current game nivel', () => {
        const currentGameNivel = fromJS({});
        const mockedState = fromJS({
            game: {
                nivels: [{}]
            }
        });
        expect(gameNivelSelector(mockedState)).toEqual(currentGameNivel);
    });
    
});

describe('makeSelectGameNivelPath', () => {
    const gameNivelPathSelector = makeSelectGameNivelPath();
    it('should select the path based on the gameNivelId', () => {
        const gameNivelPath = fromJS([]);
        const mockedState = fromJS({
            game: {
                gameNivelId: 0,
                nivels: [
                    { id: 0, path: []}
                ]
            }
        });
        expect(gameNivelPathSelector(mockedState)).toEqual(gameNivelPath);
    });
});

describe('makeSelectGameNivelInstructions', () => {
    const gameNivelInstructionsSelector = makeSelectGameNivelInstructions();
    it('should select the instructions based on the gameNivelId', () => {
        const gameNivelInstructions = fromJS([]);
        const mockedState = fromJS({
            game: {
                gameNivelId: 0,
                nivels: [
                    { id: 0, instructions: []}
                ]
            }
        });
        expect(gameNivelInstructionsSelector(mockedState)).toEqual(gameNivelInstructions);
    });
});