import React from 'react'
import { hydrate, render } from 'react-dom'
import { routes } from './routes'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import customPaths from './constants/custom-paths'
import store from './store'
import './styles/base.css'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <Router history={browserHistory}>{routes(customPaths)}</Router>
    </Provider>,
    rootElement
  )
} else {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes(customPaths)}</Router>
    </Provider>,
    rootElement
  )
}
