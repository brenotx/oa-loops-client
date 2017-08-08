import axios from "axios";

import { FETCH_NIVELS_STATS } from './constants';
import { config } from '../../config';

const API_URL = config.API_URL;


export function fetchNivelsStats() {
    return function(dispatch) {
        axios.get(`${API_URL}/nivelStats`, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_NIVELS_STATS,
                payload: response.data
            });
        });
    };
}
