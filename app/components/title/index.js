import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  title: {
    display: 'block',
    fontFamily: '"Great Vibes"',
    fontSize: 'calc( 50px + (96 - 50) * ( (100vw - 600px) / (1024 - 600) ))',
    fontWeight: 'normal',
    left: '50%',
    lineHeight: 1,
    position: 'absolute',
    top: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    '@media (max-width: 600px)': {
      fontSize: '50px'
    },
    '@media (min-width: 1024px)': {
      fontSize: '96px'
    }
  },
  span: {
    whiteSpace: 'pre'
  },
  input: {
    border: 0,
    borderBottom: '1px solid #000',
    display: 'block',
    fontFamily: '"Great Vibes"',
    fontSize: 'calc( 40px + (80 - 40) * ( (100vw - 600px) / (1024 - 600) ))',
    height: 'calc( 60px + (100 - 60) * ( (100vw - 600px) / (1024 - 600) ))',
    paddingRight: '1vw',
    textAlign: 'center',
    width: '50vw',
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
  submit: {
    height: '1px',
    overflow: 'hidden',
    width: '1px'
  }
})
