import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  form: {
    display: 'inline-block',
    padding: '10px'
  },
  title: {
    display: 'inline-block',
    fontFamily: '"Great Vibes"',
    fontSize: '30px',
    fontWeight: 'normal',
    lineHeight: 1
  },
  span: {
    whiteSpace: 'pre'
  },
  input: {
    border: 0,
    borderBottom: '1px solid #000',
    fonFamily: '"Great Vibes"',
    fontSize: '30px',
    height: '45px',
    paddingRight: '1vw',
    textAlign: 'center',
    width: '100px',
    ':focus': {
      outline: 0
    }
  },
  submit: {
    height: '1px',
    overflow: 'hidden',
    width: '1px'
  }
})
