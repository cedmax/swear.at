import {connect} from 'react-redux'
import Bungee from 'components/bungee'
import Rectangle from 'react-rectangle'

const startWithVowel = (insult) => {
  const match = insult.match(/[aeiou]/i)
  return match && match.index === 0
}

const Card = props => {
  const {
    styles,
    name,
    insult
  } = props

  let article = startWithVowel(insult) ? 'an' : 'a'
  const text = name ? [
    `My dear`,
    `${name},`,
    `you're such ${article}`,
    `${insult}`
  ] : []

  return (
     <div className={styles.card}>
      <Rectangle aspectRatio={[2, 2.5]}>
        <Bungee text={text} />
      </Rectangle>
    </div>
  )
}

export default connect(state => state)(Card)
