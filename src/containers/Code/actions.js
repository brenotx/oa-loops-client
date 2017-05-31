import { SET_USER_PATH, RESET_USER_PATH } from './constants';

export function setUserPath(userPath) {
    return {
        type: SET_USER_PATH,
        userPath
    };
}

export function resetUserPath() {
    return {
        type: RESET_USER_PATH
    }
}
