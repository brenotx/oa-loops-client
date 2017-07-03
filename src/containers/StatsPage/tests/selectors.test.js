import { fromJS } from 'immutable';

import { selectNivelsStats } from '../selectors';

describe('selectNivelsStats', () => {
    it('should select the nivels stats state', () => {
        const nivelsStatsState = fromJS({});
        const mockedState = fromJS({
            statsPage: nivelsStatsState
        });
        expect(selectNivelsStats(mockedState)).toEqual(nivelsStatsState);
    });
});