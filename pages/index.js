import StyletronProvider from 'providers/styletron'
import ReduxProvider from 'providers/redux'
import Main from 'components/main'

export default function () {
  return (
    <ReduxProvider>
      <StyletronProvider>
        <Main />
      </StyletronProvider>
    </ReduxProvider>
  )
}
