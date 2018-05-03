import React, { Component } from 'react'
import Fittext from 'react-fittext'
import classNames from './style.module.css'

export default class Bungee extends Component {
  render() {
    const {text} = this.props

    return (
      <div className={classNames.wrapper}>
        {text.map((line, i) =>
          <Fittext key={i} compressor={line.length / 12.5} maxFontSize={198}>
            <h2 className={classNames.bungee} data-text={line}>{line}</h2>
          </Fittext>
        )}
      </div>
    )
  }
}
