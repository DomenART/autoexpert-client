import * as ActionTypes from '../action-types'
import { apiAction } from '../../components/Http'

export const registerFetch = credentials => dispatch => {
  apiAction({
    url: 'auth/register',
    method: 'POST',
    data: credentials,

    onStart: () => {
      dispatch({ type: ActionTypes.AUTH_REGISTER_REQUEST })
    },

    onSuccess: () => {
      dispatch({ type: ActionTypes.AUTH_REGISTER_SUCCESS })
    },

    onFailure: data => {
      dispatch({
        type: ActionTypes.AUTH_REGISTER_FAILURE,
        payload: data
      })
    }
  })
}

export const registerReset = () => ({
  type: ActionTypes.AUTH_REGISTER_RESET
})