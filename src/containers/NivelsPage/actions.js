import axios from "axios";

import { FETCH_USER_MAX_NIVEL, SET_CURRENT_NIVEL } from './constants';

const API_URL = 'https://protected-thicket-11339.herokuapp.com';
// const API_URL = 'http://localhost:3090';

export function setCurrentNivel(currentNivel) {
    return {
        type: SET_CURRENT_NIVEL,
        currentNivel
    };
}

export function fetchUserMaxNivel(userId) {
    return function(dispatch) {
        axios.get(`${API_URL}/userMaxNivel/${userId}`, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_USER_MAX_NIVEL,
                payload: response.data
            });
        });
    };
}