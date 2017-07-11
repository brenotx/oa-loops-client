import axios from 'axios';

import { nivels } from './mock';
import { FETCH_NIVEL } from './constants';

export function fetchNivel(currentNivelId) {
    return function(dispatch) {
        dispatch({
            type: FETCH_NIVEL,
            payload: nivels.find( obj => {
                return obj.get('id') === parseInt(currentNivelId);
            })
        });
    };
}
