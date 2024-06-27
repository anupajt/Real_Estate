import { SIGNIN_FAIL, SIGNIN_SUCCESS,SIGNUP_SUCCESS,SIGNUP_FAIL,LOGOUT } from "../actions/Types"


const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    loading : false
}

export default function(state = initialState,action){
    const{type,payload} = action;
    
    switch(type){
        case SIGNIN_SUCCESS:
            localStorage.setItem('token', payload.access);
            return {
                ...state,
                isAuthenticated : true,
                loading : false,
                token : payload.access
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated : false,
                loading : true
            }
        case SIGNUP_FAIL:
        case SIGNIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated : false,
                loading : false
            }
        default:
            return state
    }
}