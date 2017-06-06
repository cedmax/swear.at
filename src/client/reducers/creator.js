import constants from '../constants'

const createReducer = (eventType, defaultValue) => {
  return (state = defaultValue, action) => {
    if (action.type === constants[eventType]) {
      state = action.data
    }

    return state
  }
}

export default createReducer
