export const ADD_INSTRUCTION = 'ADD_INSTRUCTION';
export const REMOVE_INSTRUCTION = 'REMOVE_INSTRUCTION';
export const SET_ACTIVE_BOX = 'SET_ACTIVE_BOX';
export const RESET_APP = 'RESET_APP';
export const NEXT_NIVEL = 'NEXT_NIVEL';
export const SET_PROG_REPEAT = 'SET_PROG_REPEAT'; 


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

export const setActiveBox = (boxName) => {
    return {
        type: SET_ACTIVE_BOX,
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

export const setProgRepeat = (value) => {
    return {
        type: SET_PROG_REPEAT,
        value
    }
}
