import StyletronProvider from 'providers/styletron'
import Main from 'components/main'
import ReduxProvider from 'providers/redux'

export default class Form extends React.Component {
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
