import * as ActionTypes from '../action-types'
// import { apiAction } from './api'

// export function register(credentials) {
//   return apiAction({
//     url: 'register',
//     label: ActionTypes.AUTH_REGISTER_REQUEST,
//     onSuccess: payload => ({
//       type: ActionTypes.AUTH_REGISTER_SUCCESS,
//       payload
//     }),
//     onFailure: payload => ({
//       type: ActionTypes.AUTH_REGISTER_FAILURE,
//       payload
//     })
//   })
// }

// function setArticleDetails(data) {
//   return {
//     type: 'TEST',
//     payload: data
//   };
// }

// export function register(credentials) {
//   return dispatch => (
//     new Promise((resolve, reject) => {
//       Http.post('/api/auth/register', credentials)
//         .then(res => {
//           return resolve(res.data)
//         })
//         .catch(response => {
//           const statusCode = response.response.status
//           const data = {
//             errors: response.response.data.errors || {},
//             statusCode,
//           }
//           return reject(data)
//         })
//     })
//   )
// }

// export function updateUser(payload) {
//     return {
//         type: ActionTypes.AUTH_UPDATE_USER,
//         payload
//     }
// }

// export function authLogin(payload){
//     return {
//         type: ActionTypes.AUTH_LOGIN,
//         payload
//     }
// }
//
export function authLogout(){
    return {
        type: ActionTypes.AUTH_LOGOUT
    }
}
//
// export function authCheck(){
//     return {
//         type: ActionTypes.AUTH_CHECK
//     }
// }