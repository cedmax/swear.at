import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  card: {
    background: '#DC4227',
    boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    margin: 'auto',
    maxWidth: '500px',
    padding: '2%',
    textAlign: 'center',
    transition: '0.3s',
    width: '90%',
    ':hover': {
      boxShadow: '0 16px 24px 0 rgba(0,0,0,0.2)'
    }
  },
  button: {
    bottom: 0,
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%)'
  }
})
