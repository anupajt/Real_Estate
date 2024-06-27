import axios from 'axios';
import { setAlert } from './Alert';
import {SIGNUP_SUCCESS, SIGNUP_FAIL, SIGNIN_SUCCESS, LOGOUT, SIGNIN_FAIL} from './Types'

export const login = (email, password) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('http://localhost:8000/api/token/', body, config);

        dispatch({
            type : SIGNIN_SUCCESS,
            payload : res.data
        });
        dispatch(setAlert('Authenticated successfully', 'success'))
    }
    catch(err){
        dispatch({
            type : SIGNIN_FAIL
        });
        dispatch(setAlert('Error Athenticating', 'error'));
    }
}

export const signup =({name,email,password,password2}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const body = JSON.stringify({name,email, password,password2});

    try {
        const res = await axios.post('http://localhost:8000/api/accounts/signup', body, config);

        dispatch({
            type : SIGNUP_SUCCESS,
            payload : res.data
        });
        dispatch(login(email,password));
    }
    catch(err){
        dispatch({
            type : SIGNUP_FAIL
        });
        dispatch(setAlert('Error Athenticating', 'error'));
    }
}

export const logout = () => dispatch => {
    dispatch(setAlert('Logout Successful', 'success'));
    dispatch({type:LOGOUT})
}