import connectStyles from 'styletron-connect'
import Base from './base'

const Header = props => {
  return <Base {...props} />
}

export default connectStyles(Header, {
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: '500px',
    padding: '1% 0',
    width: '90%'
  },
  select: {
    background: '#E7E9DB',
    backgroundImage: 'none',
    border: 'none',
    boxShadow: 'none',
    color: '#771F15',
    fontFamily: 'Bungee',
    fontSize: '15px',
    height: '40px',
    padding: '5px 8px',
    textAlign: 'center',
    width: '150px',
    '-webkit-appearance': 'none',
    ':focus': {
      outline: 'none'
    }
  }
})
