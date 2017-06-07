import React from 'react'
import ClipboardButton from 'react-clipboard.js'
import {connect} from 'react-redux'
import classNames from './style.css'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      copied: false
    }
    this.onSuccess = this.onSuccess.bind(this)
  }

  onSuccess () {
    this.setState({
      copied: true
    })

    setTimeout(() => {
      this.setState({
        copied: false
      })
    }, 3000)
  }

  getText () {
    return window.location.href
  }

  render () {
    const {insult} = this.props

    let button
    if (insult) {
      button = (
        <ClipboardButton
          className={`${this.state.copied
            ? classNames.buttonActive
            : ''} ${classNames.button}`}
          option-text={this.getText}
          onSuccess={this.onSuccess}
        >
          {this.state.copied ? 'successully copied' : 'Share!'}
        </ClipboardButton>
      )
    } else {
      button = (
        <button className={`${classNames.buttonDisabled} ${classNames.button}`}>
          Share!
        </button>
      )
    }

    return (
      <div className={classNames.actionButtons}>
        {button}
      </div>
    )
  }
}

export default connect(state => ({
  insult: state.insult
}))(Button)
