import StyletronProvider from 'providers/styletron'
import Form from 'components/form'
import Card from 'components/card'
import ReduxProvider from 'providers/redux'
import Grid from 'gx'

export default function () {
  return (
    <ReduxProvider>
      <StyletronProvider>
        <div>
          <Grid col={4}>
            <Form />
          </Grid>
          <Grid col={8}>
            <Card />
          </Grid>
        </div>
      </StyletronProvider>
    </ReduxProvider>
  )
}
