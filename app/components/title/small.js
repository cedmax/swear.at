import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  form: {
    display: 'inline-block',
    'padding': '10px'
  },
  title: {
    'font-weight': 'normal',
    display: 'inline-block',
    'line-height': 1,
    'font-family': '"Great Vibes"',
    'font-size': '30px'
  },
  span: {
    'white-space': 'pre'
  },
  input: {
    'font-family': '"Great Vibes"',
    border: 0,
    'border-bottom': '1px solid #000',
    width: '100px',
    'height': '45px',
    'text-align': 'center',
    'padding-right': '1vw',
    'font-size': '30px',
    ':focus': {
      outline: 0
    }
  },
  'submit': {
    width: '1px',
    'height': '1px',
    'overflow': 'hidden'
  }
})
