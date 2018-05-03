import React from 'react'
import Title from '../title'
import classNames from './style.module.css'
import { browserHistory } from 'react-router'
import insults from '../../constants/insults'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.handleInsultChange = this.handleInsultChange.bind(this)
  }

  handleInsultChange (e) {
    let insult = e.target.value
    if (insult === 'Choose') {
      insult = ''
    }
    browserHistory.replace(
      `/${this.props.name.toLowerCase()}${
        insult ? `/${insult.toLowerCase()}` : ''
      }`
    )

    this.props.updateInsult(insult)
  }

  render () {
    return (
      <div className={classNames.header}>
        <Title small name={this.props.name} />
        <select
          className={classNames.select}
          value={this.props.insult}
          name="insult"
          onChange={this.handleInsultChange}
        >
          <option>Choose</option>
          {insults.map(insult => (
            <option value={insult.toLowerCase()} key={insult}>
              {insult}
            </option>
          ))}
        </select>
      </div>
    )
  }
}
