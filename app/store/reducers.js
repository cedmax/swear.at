import constants from './constants'
import {combineReducers} from 'redux'
import {createReducer} from 'helpers/redux'

const initialState = {
  tempName: '',
  name: '',
  insult: '    ...      '
}

export default combineReducers({
  tempName: createReducer(constants.TEMP_NAME, initialState.tempName),
  name: createReducer(constants.UPDATE_NAME, initialState.name),
  insult: createReducer(constants.UPDATE_INSULT, initialState.insult)
})
