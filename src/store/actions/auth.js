import * as ActionTypes from '../action-types'

export function updateUser(payload) {
    return {
        type: ActionTypes.AUTH_UPDATE_USER,
        payload
    }
}

export function authLogin(payload){
    return {
        type: ActionTypes.AUTH_LOGIN,
        payload
    }
}

export function authLogout(){
    return {
        type: ActionTypes.AUTH_LOGOUT
    }
}

export function authCheck(){
    return {
        type: ActionTypes.AUTH_CHECK
    }
}