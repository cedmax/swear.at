import React from 'react'
import { hydrate, render } from 'react-dom';
import {routes} from './routes'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducers'
import customPaths from './constants/custom-paths'

import './styles/base.css'

const store = createStore(reducer, {})
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <Router history={browserHistory}>{routes(customPaths)}</Router>
    </Provider>, rootElement);
 } else {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes(customPaths)}</Router>
    </Provider>, rootElement);
 }


