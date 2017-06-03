import connectStyles from 'styletron-connect'
import Base from './base'

export default connectStyles(Base, {
  actionButtons: {
    'margin': '30px auto 20px',
    'text-align': 'center',
    'max-width': '500px',
    'width': '90%'
  },
  button: {
    'text-align': 'center',
    'background': '#E7E9DB',
    'font-size': '15px',
    'color': '#771F15',
    'font-family': 'Bungee',
    'width': '150px',
    'height': '40px',
    'padding': '5px 8px',
    'border': 'none',
    'line-height': '1',
    'margin': '0 10px;',
    'outline': 'none',
    'box-shadow': '0 4px #771F15',
    'border-radius': '6px',
    ':active': {
      'box-shadow': '0 0'
    }
  },
  buttonActive: {
    'box-shadow': '0 0' 
  }
})
