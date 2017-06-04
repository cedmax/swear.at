import StyletronProvider from 'providers/styletron'
import ReduxProvider from 'providers/redux'
import Main from 'components/main'
import {confirmName, updateName, updateInsult} from 'store/actions'
import capitalize from 'capitalize'
import store from 'store'

export default class Index extends React.Component {
  constructor (props) {
    super(props)

    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname
      const paths = pathname.split('/')
      const name = capitalize(paths[1] || '')
      store.dispatch(updateName(name))
      store.dispatch(confirmName(name))

      const insult = capitalize(paths[2] || '')
      if (insult) {
        store.dispatch(updateInsult(insult))
      }
    }
  }

  render () {
    return (
      <ReduxProvider>
        <StyletronProvider>
          <Main />
        </StyletronProvider>
      </ReduxProvider>
    )
  }
}
