import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Index from './pages/index'
import Form from './pages/form'
import obfuscator from './helpers/obfuscator'

export const routes = (
  <Route path="/">
    <Route path="share/:id" component={Form} onEnter={(state) => {
      if (typeof window !== 'undefined') {
        window.location.href = obfuscator.decode(state.params.id)
      }
    }}/>
    <Route path=":name">
      <Route path=":insult" component={Form} />
      <IndexRoute component={Form} />
    </Route>
    <IndexRoute component={Index} />
  </Route>
)
