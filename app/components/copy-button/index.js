import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  actionButtons: {
    margin: '30px auto 20px',
    maxWidth: '500px',
    textAlign: 'center',
    width: '90%'
  },
  button: {
    background: '#E7E9DB',
    border: 'none',
    borderRadius: '6px',
    boxShadow: '0 4px #771F15',
    color: '#771F15',
    fontFamily: 'Bungee',
    fontSize: '15px',
    height: '40px',
    lineHeight: '1',
    margin: '0 10px;',
    outline: 'none',
    padding: '5px 8px',
    textAlign: 'center',
    width: '150px',
    ':active': {
      boxShadow: '0 0'
    }
  },
  buttonActive: {
    boxShadow: '0 0'
  }
})
