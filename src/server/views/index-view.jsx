//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from 'electrode-redux-router-engine'
import {routes} from '../../client/routes'
import {createStore} from 'redux'
import rootReducer from '../../client/reducers'
import capitalize from 'capitalize'

const Promise = require('bluebird')

function createReduxStore(req, match) { // eslint-disable-line
  const pathname = req.url
  const paths = pathname.split('/')
  const name = capitalize(paths[1] || '')
  const insult = capitalize(paths[2] || '')

  const store = createStore(rootReducer, {
    tempName: name,
    name,
    insult
  })
  return Promise.resolve(store)
}

//
// This function is exported as the content for the webapp plugin.
//
// See config/default.json under plugins.webapp on specifying the content.
//
// When the Web server hits the routes handler installed by the webapp plugin, it
// will call this function to retrieve the content for SSR if it's enabled.
//
//

module.exports = (req) => {
  const app = req.server && req.server.app || req.app
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({routes, createReduxStore})
  }

  return app.routesEngine.render(req)
}
