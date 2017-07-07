import { fromJS } from 'immutable';

import {
    selectNivelsPage,
    makeSelectNivels
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
