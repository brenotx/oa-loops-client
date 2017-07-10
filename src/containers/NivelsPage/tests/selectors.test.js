import { fromJS } from 'immutable';

import {
    selectNivelsPage,
    makeSelectNivels,
    makeSelectUserMaxNivel
} from '../selectors';

describe('selectNivelsPage', () => {
    it('should select the nivels page state', () => {
        const nivelsPageState = fromJS({});
        const mockedState = fromJS({
            nivelsPage: nivelsPageState
        });
        expect(selectNivelsPage(mockedState)).toEqual(nivelsPageState);
    });
});

// TODO: Duplicated code in game selectors, you should re-think about your state structures and components names. Shit happens
describe('makeSelectNivels', () => {
    const nivelSelector = makeSelectNivels();
    it('should select the nivels', () => {
        const nivels = fromJS([]);
        const mockedState = fromJS({
            nivelsPage: {
                nivels: []
            }
        });
        expect(nivelSelector(mockedState)).toEqual(nivels);
    });
    
});


describe('makeSelectUserMaxNivel', () => {
    const userMaxNivelSelector = makeSelectUserMaxNivel();
    it('should select the user max nivel', () => {
        const userMaxNivel = 0;
        const mockedState = fromJS({
            nivelsPage: {
                userMaxNivel: 0
            }
        });
        expect(userMaxNivelSelector(mockedState)).toEqual(userMaxNivel);
    });

});
