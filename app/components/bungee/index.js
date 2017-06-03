import connectStyles from 'styletron-connect'
import Base from './base'

const templates = [
  ['#771f15', '#E7E9DB', '#ccc']
]

const template = templates[0]

export default connectStyles(Base, {
  wrapper: {
    top: '50%',
    transform: 'translateY(-55%)',
    position: 'absolute',
    width: '100%'
  },
  bungee: {
    'line-height': 1.1,
    color: template[0],
    'font-family': 'Bungee, cursive',
    'position': 'relative',
    ':before': {
      color: template[1],
      position: 'absolute',
      display: 'block',
      content: 'attr(data-text)',
      'font-family': 'Bungee, cursive',
      'transform': 'translate3d(2px, -2px, 0)',
      'width': '100%'
    },
    ':after': {
      display: 'block',
      content: 'attr(data-text)',
      'transform': 'translate3d(2px, -2px, 0)',
      'font-family': 'Bungee Hairline, cursive',
      color: template[2],
      position: 'absolute',
      'top': '0',
      'width': '100%'
    }
  }
})
