export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';

export function addInstruction(instruction) {
    return {
        type: ADD_INSTRUCTION,
        payload: instruction
    }
}
