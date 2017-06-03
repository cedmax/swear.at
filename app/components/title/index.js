import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  title: {
    'font-weight': 'normal',
    'position': 'absolute',
    display: 'block',
    'left': '50%',
    'top': '50%',
    'line-height': 1,
    transform: 'translate3d(-50%, -50%, 0)',
    'font-family': '"Great Vibes"',
    'font-size': 'calc( 50px + (96 - 50) * ( (100vw - 600px) / (1024 - 600) ))',
    '@media (max-width: 600px)': {
      fontSize: '50px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '96px'
    }
  },
  span: {
    'white-space': 'pre'
  },
  input: {
    'font-family': '"Great Vibes"',
    display: 'block',
    border: 0,
    'border-bottom': '1px solid #000',
    width: '50vw',
    'height': 'calc( 60px + (100 - 60) * ( (100vw - 600px) / (1024 - 600) ))',
    'text-align': 'center',
    'padding-right': '1vw',
    'font-size': 'calc( 40px + (80 - 40) * ( (100vw - 600px) / (1024 - 600) ))',
    '@media (max-width: 600px)': {
      fontSize: '40px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '80px'
    },
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
