import * as ActionTypes from '../action-types'

export const apiStart = label => ({
  type: ActionTypes.API_START,
  payload: label
})

export const apiEnd = label => ({
  type: ActionTypes.API_END,
  payload: label
})

export const accessDenied = url => ({
  type: ActionTypes.ACCESS_DENIED,
  payload: {
    url
  }
})

export const apiError = error => ({
  type: ActionTypes.API_ERROR,
  error
})

export const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) => ({
  type: ActionTypes.API,
  payload: {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headersOverride
  }
})