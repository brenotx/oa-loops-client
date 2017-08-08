import axios from "axios";

import { FETCH_NIVELS_STATS } from './constants';

const API_URL = 'https://protected-thicket-11339.herokuapp.com';
// const API_URL = 'http://localhost:3090';


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
