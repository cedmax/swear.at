import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  card: {
    'margin': 'auto',
    'text-align': 'center',
    background: '#DC4227',
    'max-width': '500px',
    'width': '90%',
    padding: '2%',
    'box-shadow': '0 4px 8px 0 rgba(0,0,0,0.2)',
    'transition': '0.3s',
    ':hover': {
      'box-shadow': '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
  }
})
