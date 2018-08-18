import * as ActionTypes from '../action-types'
import { apiAction } from '../../components/Http'

export const registerFetch = credentials => dispatch => {
  apiAction({
    url: 'register',

    onStart: () => {
      dispatch({ type: ActionTypes.AUTH_REGISTER_REQUEST })
    },

    onSuccess: (data) => {
      console.log('data', data)
      dispatch({ type: ActionTypes.AUTH_REGISTER_SUCCESS })
    },

    onFailure: (error) => {
      console.log('error', error)
      dispatch({ type: ActionTypes.AUTH_REGISTER_FAILURE })
    }
  })
}

export const registerReset = () => ({
  type: ActionTypes.AUTH_REGISTER_RESET
})