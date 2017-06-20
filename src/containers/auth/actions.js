import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE
} from './constants';

const API_URL = 'http://localhost:3090';

export function signinUser({ email, password }, history) {
    return function(dispatch) {
        axios.post(`${API_URL}/signin`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/game');
            })
            .catch(() => {
                dispatch(authError('Bad Login Info'));
            });
    }
}

export function signupUser({ email, password }, history) {
    return function(dispatch) {
        axios.post(`${API_URL}/signup`, { email, password })
            .then(response => {
                dispatch({ type: AUTH_USER });
                localStorage.setItem('token', response.data.token);
                history.push('/game');
            })
            .catch(response => dispatch(authError(response.data.error)));
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    };
}

export function signoutUser() {
    localStorage.removeItem('token');
    return { type: UNAUTH_USER };
}

export function fetchMessage() {
    return function(dispatch) {
        axios.get(API_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
        .then(response => {
            dispatch({
                type: FETCH_MESSAGE,
                payload: response.data.message
            });
        });
    }
}
