import * as ActionTypes from '../action-types'

const user = {
    id: null,
    name: null,
    email: null
}

const initialState = {
    isAuthenticated : false,
    user
}

const Auth = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ActionTypes.AUTH_LOGIN:
      return authLogin(state, payload)
    case ActionTypes.AUTH_CHECK:
      return checkAuth(state);
    case ActionTypes.AUTH_LOGOUT:
      return logout(state);
    // case ActionTypes.AUTH_REGISTER_REQUEST:
    //   return register(state, payload)
    //   return {...authLogin(state, payload), fetchingRegister: true}

    default:
      return state
  }
}

const authLogin = (state, payload) => {
  const token = payload.token
  const user = payload.user
  localStorage.setItem('token', token)
  // Http.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return {
    ...state,
    isAuthenticated: true,
    user
  }
}

const checkAuth = (state) => {
  // state = {...state, isAuthenticated: !!localStorage.getItem('token')}

  // if (state.isAuthenticated) {
      // Http.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  // }
  return {...state, isAuthenticated: !!localStorage.getItem('token')}
}

const logout = (state) => {
  localStorage.removeItem('token')

  return {...state, isAuthenticated: false}
}

// const register = (state, payload) => {
//   state = {...authLogin(state, payload), isAuthenticated: !!localStorage.getItem('token')}
//
//   return {...state, isAuthenticated: false}
// }

export default Auth