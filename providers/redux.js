import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../store/reducers'
import logger from 'redux-logger'

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

export default function ({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};