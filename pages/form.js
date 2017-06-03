import StyletronProvider from 'providers/styletron'
import Main from 'components/main'
import ReduxProvider from 'providers/redux'
import {confirmName, updateName, updateInsult} from 'store/actions'
import capitalize from 'capitalize'
import store from 'store'

export default class Form extends React.Component {
  componentWillMount () {
    const name = capitalize(this.props.url.query.name)
    store.dispatch(updateName(name))
    store.dispatch(confirmName(name))

    const insult = capitalize(this.props.url.query.insult || '')
    if (insult) {
      store.dispatch(updateInsult(insult))
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
