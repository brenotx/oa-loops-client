import { fromJS } from 'immutable';

export const nivels = fromJS([
    {
        id: 1,
        path: ['20', '21', '22', '23', '24', '25'],
        instructions: ['arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'repeat']
    },
    {
        id: 2,
        path: ['10', '11', '21', '22', '32', '33', '43', '44', '45'],
        instructions: ['arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'repeat']
    },
    {
        id: 3,
        path: ['00', '10', '11', '12', '22', '32', '33', '34', '44', '54', '53', '52'],
        instructions: ['arrow-right', 'arrow-up', 'arrow-down', 'arrow-left', 'repeat']
    }
]);
