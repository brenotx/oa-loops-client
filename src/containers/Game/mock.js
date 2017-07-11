import { fromJS } from 'immutable';

export const nivels = fromJS([
    {
        id: 0,
        path: [ "20", "21", "22", "23", "24" ],
        instructions: [ 'arrow-right'],
    },
    {
        id: 1,
        path: [ "20", "21", "31", "32", "33", "34" ],
        instructions: [ 'arrow-right', 'repeat', 'arrow-up', 'arrow-down', 'arrow-left' ]
    },
    {
        id: 2,
        path: [ "20", "21", "31", "32", "33", "23", "24" ],
        instructions: [ 'arrow-right', 'repeat', 'arrow-up', 'arrow-down', 'arrow-left' ]
    }
]);
