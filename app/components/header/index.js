import connectStyles from 'styletron-connect'
import Base from './base'

const Header = props => {
  return <Base {...props} />
}

export default connectStyles(Header, {
  header: {
    'margin': 'auto',
    'max-width': '500px',
    'width': '90%',
    'padding': '1% 0',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'space-between'
  },
  select: {
    'text-align': 'center',
    'background': '#E7E9DB',
    'font-size': '15px',
    'color': '#771F15',
    'font-family': 'Bungee',
    'width': '150px',
    'height': '40px',
    'padding': '5px 8px',
    'border': 'none',
    'box-shadow': 'none',
    'background-image': 'none',
    '-webkit-appearance': 'none',
    ':focus': {
      outline: 'none'
    }
  }
})
