import paths from '../constants/custom-paths'

let defaultState = {
  tempName: '',
  name: '',
  insult: '',
  paths
}

if (typeof window !== 'undefined') {
  const pathname = window.location.pathname
  const paths = pathname.split('/')
  const name = paths[1] || ''
  const insult = paths[2] || ''

  defaultState = {
    ...defaultState,
    tempName: name,
    name,
    insult
  }
}

export default defaultState
