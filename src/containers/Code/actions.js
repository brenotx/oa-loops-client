import axios from "axios";

import {
    SET_USER_PATH,
    RESET_USER_PATH,
    FETCH_NIVEL_STATS,
    UPDATE_NIVEL_STATS,
    UPDATE_USER_NIVEL_STATS
} from './constants';
import { config } from '../../config';

const API_URL = config.API_URL;

export function setUserPath(userPath) {
    return {
        type: SET_USER_PATH,
        userPath
    };
}

export function resetUserPath() {
    return {
        type: RESET_USER_PATH
    };
}

export function fetchNivelStats() {
    return function(dispatch) {
        axios.get(`${API_URL}/nivelStats`, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_NIVEL_STATS,
                payload: response.data
            });
        });
    };
}

export function updateNivelStats({ nivelId, correctAnwsers, wrongAnwsers }) {
    return function(dispatch) {
        axios.post(`${API_URL}/nivel`, { nivelId, correctAnwsers, wrongAnwsers })
            .then(response => {
                console.log("Success!");
            });
    };
}

export function updateUserNivelStats({ user_id, maxNivel }) {
    return function(dispatch) {
        axios.post(`${API_URL}/setUserMaxNivel`, { user_id, maxNivel })
            .then(response => {
                console.log("User nivel stats updated!");
            });
    };
}
