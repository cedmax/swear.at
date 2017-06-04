import constants from './constants'
import {combineReducers} from 'redux'
import {createReducer} from 'helpers/redux'

import capitalize from 'capitalize'

let initialState

if (typeof window !== 'undefined') {
  const pathname = window.location.pathname
  const paths = pathname.split('/')
  const name = capitalize(paths[1] || '')

  const insult = capitalize(paths[2] || '')

  initialState = {
    tempName: name,
    name: name,
    insult: insult
  }
} else {
  initialState = {
    tempName: '',
    name: '',
    insult: '    ...      '
  }
}

export default combineReducers({
  tempName: createReducer(constants.TEMP_NAME, initialState.tempName),
  name: createReducer(constants.UPDATE_NAME, initialState.name),
  insult: createReducer(constants.UPDATE_INSULT, initialState.insult)
})
