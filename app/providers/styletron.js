import {StyletronProvider} from 'styletron-react'
import getStyletron from 'helpers/styletron'

export default ({children}) =>
  <StyletronProvider styletron={getStyletron()}>
    {children}
  </StyletronProvider>
