import { combineReducers } from 'redux'
import auth from './auth'
import register from './register'

const RootReducer = combineReducers({ auth, register })

export default RootReducer