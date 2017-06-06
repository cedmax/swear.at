import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Index from './pages/index'
import Form from './pages/form'

export const routes = (
  <Route path="/">
    <Route path=":name">
      <Route path=":insult" component={Form} />
      <IndexRoute component={Form} />
    </Route>
    <IndexRoute component={Index} />
  </Route>
)
