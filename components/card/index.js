import connectStyles from 'styletron-connect';
import BaseCard from './base'

export default connectStyles(BaseCard, {
  card: {
    ':after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '300px',
      background: 'red'
    },
    fontSize: '12px'
  }
})