import connectStyles from 'styletron-connect'
import Base from './base'

const templates = [['#771f15', '#E7E9DB', '#ccc']]

const template = templates[0]

export default connectStyles(Base, {
  wrapper: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-55%)',
    width: '100%'
  },
  bungee: {
    color: template[0],
    fontFamily: 'Bungee, cursive',
    lineHeight: 1.1,
    position: 'relative',
    ':before': {
      color: template[1],
      content: 'attr(data-text)',
      display: 'block',
      fontFamily: 'Bungee, cursive',
      position: 'absolute',
      transform: 'translate3d(2px, -2px, 0)',
      width: '100%'
    },
    ':after': {
      color: template[2],
      content: 'attr(data-text)',
      display: 'block',
      fontFamily: 'Bungee Hairline, cursive',
      position: 'absolute',
      top: '0',
      transform: 'translate3d(2px, -2px, 0)',
      width: '100%'
    }
  }
})
