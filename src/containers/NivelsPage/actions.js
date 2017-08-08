import axios from "axios";

import { FETCH_USER_MAX_NIVEL, SET_CURRENT_NIVEL } from './constants';
import { config } from '../../config';

const API_URL = config.API_URL;

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