import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Index from './pages/index'
import Form from './pages/form'
import obfuscator from './helpers/obfuscator'

export const routes = (paths) => (
  <Route path="/">
    <Route path="share/:id" component={Form} onEnter={(state, replace) => {
      if (typeof window !== 'undefined') {
        replace(obfuscator.decode(state.params.id))
      }
    }}/>
    
    <Route path=":name" onEnter={(state, replace, callback) => {
      if (paths[state.params.name]){
        window.location.href = `/${state.params.name}`
      } else {
        callback()
      }
    }}>
      <Route path=":insult" component={Form} />
      <IndexRoute component={Form} />
    </Route>
    <IndexRoute component={Index} />
  </Route>
)
