import axios from "axios"
import * as ActionTypes from '../action-types'
import { accessDenied, apiError, apiStart, apiEnd } from '../actions/api'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://api.expert.local/"

const defaultHeaders = {
  "X-Requested-With": "XMLHttpRequest"
}
let headers = { ...defaultHeaders }

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action)

  if (action.type !== ActionTypes.API) return

  const {
    url,
    method,
    data,
    accessToken,
    onSuccess,
    onFailure,
    label,
    headersOverride
  } = action.payload
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data"

  if (accessToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${accessToken}`
    }
  }

  if (headersOverride) {
    headers = {
      ...headers,
      ...headersOverride
    }
  }

  if (label) {
    dispatch(apiStart(label))
  }

  axios
    .request({
      url: `${BASE_URL}${url}`,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      if (label) {
        dispatch(apiEnd(label))
      }
      dispatch(onSuccess(data))
    })
    .catch(error => {
      if (label) {
        dispatch(apiEnd(label))
      }
      dispatch(apiError(error))
      dispatch(onFailure(error))

      if (error.response && error.response.status === 403) {
        dispatch(accessDenied(window.location.pathname))
      }
    })
}

export default apiMiddleware