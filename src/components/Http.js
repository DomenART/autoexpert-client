import axios from 'axios'
import { store } from '../store'
import { authLogout } from '../store/actions/auth'
// import * as ActionTypes from '../store/action-types'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(authLogout())
    }

    return Promise.reject(error)
  }
)

export default axios

export const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  accessToken = null,
  onStart = () => {},
  onSuccess = () => {},
  onFailure = () => {},
  headersOverride = null
}) => {
  let headers = {}
  const BASE_URL = "http://api.expert.local/"
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

  onStart()

  axios
    .request({
      url: `${BASE_URL}${url}`,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      onSuccess(data)
    })
    .catch(error => {
      onFailure(error)
    })
}