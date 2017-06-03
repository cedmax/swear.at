
import constants from './constants'
import { combineReducers } from 'redux'
import { createReducer } from '../helpers/redux';

const initialState = {
  name: '',
  insult: ''
} 

export default combineReducers({
  name: createReducer(constants.UPDATE_NAME, initialState.name),
  insult: createReducer(constants.UPDATE_INSULT, initialState.insult)
})