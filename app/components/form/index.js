import connectStyles from 'styletron-connect'
import Base from './base'

const Form = props => {
  return <Base {...props} />
}

export default connectStyles(Form, {
  form: {
    backgroundColor: 'lightblue',
    fontSize: '12px'
  }
})
