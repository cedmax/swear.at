import React from 'react'
import {connect} from 'react-redux'
import Bungee from '../bungee'
import Rectangle from 'react-rectangle'
import CopyButton from '../copy-button'
import classNames from './style.module.css'

const startWithVowel = insult => {
  const match = insult.match(/[aeiou]/i)
  return match && match.index === 0
}

const Card = props => {
  const {name, insult} = props

  const article = startWithVowel(insult) ? 'an' : 'a'
  const text = [
    'My dear',
    `${name},`,
    `you're such ${article}`,
    `${insult || ' *@#! '}`
  ]

  return name
    ? <div className={classNames.card}>
        <Rectangle aspectRatio={[2, 2.5]} style={{width: '500px', maxWidth: '100%'}}>
          <Bungee text={text} />

          <div className={classNames.button}><CopyButton /></div>
        </Rectangle>
      </div>
    : null
}

export default connect(state => state)(Card)
