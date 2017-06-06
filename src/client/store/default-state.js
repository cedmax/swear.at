import capitalize from 'capitalize'

let defaultState

if (typeof window !== 'undefined') {
  defaultState = typeof window !== 'undefined' && window.__PRELOADED_STATE__

  const pathname = window.location.pathname
  const paths = pathname.split('/')
  const name = capitalize(paths[1] || defaultState.name || '')
  const insult = capitalize(paths[2] || defaultState.insult || '')

  defaultState = {
    tempName: name,
    name,
    insult
  }
} else {
  defaultState = {
    tempName: '',
    name: '',
    insult: ''
  }
}

export default defaultState
