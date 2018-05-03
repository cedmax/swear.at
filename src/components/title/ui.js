import React from 'react'
import classNames from './style.module.css'
import { browserHistory } from 'react-router'
import capitalize from 'capitalize'

export default class Title extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange (e) {
    this.props.updateName(e.target.value.trim())
  }

  handleSubmit (e) {
    e.preventDefault()
    const insultPath =
      this.props.tempName && this.props.insult
        ? `/${this.props.insult.toLowerCase()}`
        : ''

    if (this.props.tempName) {
      browserHistory.replace(
        `/${this.props.tempName.toLowerCase()}${insultPath}`
      )
    }
  }

  render () {
    const formClassName = `${classNames.form} ${
      this.props.small ? classNames.small : ''
    }`
    return (
      <form onSubmit={this.handleSubmit} className={formClassName}>
        <h1 className={classNames.title}>
          <span className={classNames.span}>Swear at</span>{' '}
          <input
            className={classNames.input}
            value={capitalize(this.props.tempName)}
            name="name"
            type="text"
            autoComplete="off"
            onChange={this.handleNameChange}
          />
        </h1>
        <div className={classNames.submit}>
          <input type="submit" />
        </div>
      </form>
    )
  }
}
