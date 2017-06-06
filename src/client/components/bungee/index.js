import React from 'react'
import Fittext from 'react-fittext'
import classNames from './style.css'

export default props => {
  const {text} = props

  return (
    <div className={classNames.wrapper}>
      {text.map((line, i) =>
        (<Fittext key={i} compressor={line.length / 13.5} maxFontSize={198}>
          <h2 className={classNames.bungee} data-text={line}>{line}</h2>
        </Fittext>)
      )}
    </div>
  )
}
