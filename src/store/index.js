import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import RootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
// import apiMiddleware from './middlewares/api'

const persistConfig = {
  key: 'web',
  storage,
  // blacklist: ['register']
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk/*, apiMiddleware*/, logger)
  )
)

const persistor = persistStore(store)

export { store, persistor }