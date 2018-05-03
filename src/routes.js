import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from './pages/index'
import Form from './pages/form'
import obfuscator from './helpers/obfuscator'
import store from './store'
import { updateName, updateInsult, confirmName } from './store/actions'

export const routes = paths => (
  <Route path="/">
    <Route
      path="share/:id"
      component={Form}
      onEnter={(state, replace) => {
        replace(obfuscator.decode(state.params.id))
      }}
    />

    <Route
      path=":name"
      onEnter={state => {
        if (paths[state.params.name]) {
          window.location.href = `/${state.params.name}`
        } else {
          store.dispatch(updateName(state.params.name))
          store.dispatch(confirmName(state.params.name))
          store.dispatch(updateInsult(state.params.insult || ''))
        }
      }}
    >
      <Route path=":insult" component={Form} />
      <IndexRoute component={Form} />
    </Route>
    <IndexRoute component={Index} />
  </Route>
)
