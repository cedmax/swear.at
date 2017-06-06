import constants from '../constants'
import {combineReducers} from 'redux'
import createReducer from './creator'
import defaultState from '../store/default-state'

export default combineReducers({
  tempName: createReducer(constants.TEMP_NAME, defaultState.tempName),
  name: createReducer(constants.UPDATE_NAME, defaultState.name),
  insult: createReducer(constants.UPDATE_INSULT, defaultState.insult)
})
