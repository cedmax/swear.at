import constants from '../store/constants'

export const createActionCreator = (type) => (
  (data) => ({ type, data })
)

export const createReducer = (eventType, defaultValue) => {
  return (state = defaultValue, action) => {
    if (action.type === constants[eventType]) {
      state = action.data;
    }

    return state
  }
}
