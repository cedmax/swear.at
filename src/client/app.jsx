//
// This is the client side entry point for the React app.
//

import React from 'react'
import {render} from 'react-dom'
import {routes} from './routes'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
/*  */
import store from './store'
/*  */
import './styles/base.css'

// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
/**/
window.webappStart = () => {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>{routes}</Router>
    </Provider>,
    document.querySelector('.js-content')
  )
}
