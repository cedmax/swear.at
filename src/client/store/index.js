import {
  createStore
  // ,
  // applyMiddleware
} from 'redux'
import reducer from './reducers'
import defaultState from './default-state'
// import logger from 'redux-logger'
const store = createStore(reducer, defaultState) //, applyMiddleware(logger))

export default store
