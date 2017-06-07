import React from 'react'
import {connect} from 'react-redux'
import {updateName, confirmName} from '../../store/actions'
import classNames from './style.css'
import {browserHistory} from 'react-router'

class Title extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange (e) {
    this.props.dispatch(updateName(e.target.value))
  }

  handleSubmit (e) {
    e.preventDefault()
    const insultPath = this.props.name && this.props.insult
      ? `/${this.props.insult.toLowerCase()}`
      : ''

    if (this.props.name) {
      browserHistory.replace(`/${this.props.name.toLowerCase()}${insultPath}`)
      this.props.dispatch(confirmName(this.props.name))
    }
  }

  render () {
    const formClassName = `${classNames.form} ${this.props.small
      ? classNames.small
      : ''}`
    return (
      <form onSubmit={this.handleSubmit} className={formClassName}>
        <h1 className={classNames.title}>
          <span className={classNames.span}>Swear at</span>
          {' '}
          <input
            className={classNames.input}
            value={this.props.name}
            name="name"
            type="text"
            autoComplete="off"
            onChange={this.handleNameChange}
          />
        </h1>
        <div className={classNames.submit}><input type="submit" /></div>
      </form>
    )
  }
}

export default connect(state => ({
  name: state.tempName,
  insult: state.insult
}))(Title)
