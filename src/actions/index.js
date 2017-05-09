export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION';
export const SET_SELECTEDBOX = 'SET_SELECTEDBOX';
export const RESET_APP = 'RESET_APP';
export const NEXT_NIVEL = 'NEXT_NIVEL';

export const addInstruction = (instruction) => {
    return {
        type: ADD_INSTRUCTION,
        instruction
    }
}

export const removeInstruction = (idx) => {
    return {
        type: REMOVE_INSTRUCTION,
        idx
    }
}

export const setSelectedBox = (boxName) => {
    return {
        type: SET_SELECTEDBOX,
        boxName
    }
}

export const resetApp = () => {
    return {
        type: RESET_APP
    }
}

export const nextNivel = () => {
    return {
        type: NEXT_NIVEL
    }
}
