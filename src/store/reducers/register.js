import * as ActionTypes from '../action-types'

const initialState = {
  isLoading : false,
  isSuccess : false,
  errors: {}
}

const Register = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case ActionTypes.AUTH_REGISTER_RESET:
      return {
        ...state,
        ...initialState
      }
    case ActionTypes.AUTH_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false
      }
    case ActionTypes.AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true
      }
    case ActionTypes.AUTH_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors: payload.errors
      }
    default:
      return state
  }
}

export default Register