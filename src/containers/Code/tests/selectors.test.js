import { fromJS } from 'immutable';

import { 
    selectInstructions,
    makeSelectMainInstructions,
    makeSelectProgInstructions,
    makeSelectActiveBox,
    makeSelectProgRepeat,
    selectCode,
    makeSelectUserPath
    // makeSelectNivelStats,
    // makeSelectUserID
} from '../selectors';

describe('selectInstructions', () => {
  it('should select the instructions state', () => {
    const instructionsState = fromJS({});
    const mockedState = fromJS({
      instructionReducer: instructionsState
    });
    expect(selectInstructions(mockedState)).toEqual(instructionsState);
  });
});

describe('selectCode', () => {
    it('should select the user code state', () => {
        const codeState = fromJS({});
        const mockedState = fromJS({
            code: codeState
        });
        expect(selectCode(mockedState)).toEqual(codeState);
    });
});

// describe('selectAuth', () => {
//     it('should select the auth state', () => {
//         const authState = fromJS({});
//         const mockedState = fromJS({ auth: authState });
//         expect(selectAuth(mockedState)).toEqual(authState);
//     });
// });

// describe('makeSelectUserID', () => {
//     const userIdSelector = makeSelectUserID(); 
//     it('should select the authenticated user id', () => {
//         const userId = '';
//         const mockedState = fromJS({
//             auth: {
//                 user_id: ''
//             }
//         });
//         expect(userIdSelector(mockedState)).toEqual(userId);
//     });
// });

describe('makeSelectMainInstructions', () => {
    const mainInstructionsSelector = makeSelectMainInstructions();
    it('should select the main instructions list', () => {
        const mainInstructions = fromJS([]);
        const mockedState = fromJS({
            instructionReducer: {
                mainInstructions
            }
        });
        expect(mainInstructionsSelector(mockedState)).toEqual(mainInstructions);
    });
});

describe('makeSelectProgInstructions', () => {
    const progInstructionsSelector = makeSelectProgInstructions();
    it('should select the prog instructions list', () => {
        const progInstructions = fromJS([]);
        const mockedState = fromJS({
            instructionReducer: {
                progInstructions
            }
        });
        expect(progInstructionsSelector(mockedState)).toEqual(progInstructions);
    });
});

describe('makeSelectActiveBox', () => {
    const activeBoxSelector = makeSelectActiveBox();
    it('should select the active box', () => {
        const activeBox = 'main';
        const mockedState = fromJS({
            instructionReducer: {
                activeBox: 'main'
            }
        });
        expect(activeBoxSelector(mockedState)).toEqual(activeBox);
    });
});

describe('makeSelectProgRepeat', () => {
    const progRepeatSelector = makeSelectProgRepeat();
    it('should select the prog repeat number', () => {
        const progRepeat = 10;
        const mockedState = fromJS({
            instructionReducer: {
                progRepeat: 10
            }
        });
        expect(progRepeatSelector(mockedState)).toEqual(progRepeat);
    });
});

describe('makeSelectUserPath', () => {
    const userPathSelector = makeSelectUserPath();
    it('should select the user path', () => {
        const userPathState = fromJS([]);
        const mockedState = fromJS({
            code: {
                userPath: []
            }
        });
        expect(userPathSelector(mockedState)).toEqual(userPathState);
    });
});

describe('makeSelectNivelStats', () => {
    const nivelStatsSelector = makeSelectNivelStats();
    it('should select the nivel stats', () => {
        const nivelStatsState = fromJS([]);
        const mockedState = fromJS({
            code: {
                nivelStats: []
            }
        });
        expect(nivelStatsSelector(mockedState)).toEqual(nivelStatsState);
    });
});
