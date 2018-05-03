import constants from './constants'
import { combineReducers } from 'redux'
import { createReducer } from '../helpers/redux'
import defaultState from './default-state'

export default combineReducers({
  tempName: createReducer(constants.TEMP_NAME, defaultState.tempName),
  name: createReducer(constants.UPDATE_NAME, defaultState.name),
  insult: createReducer(constants.UPDATE_INSULT, defaultState.insult),
  paths: createReducer(constants.NOOP, defaultState.paths)
})
