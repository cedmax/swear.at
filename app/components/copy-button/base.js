import ClipboardButton from 'react-clipboard.js'
import {connect} from 'react-redux'

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
    const {styles, insult} = this.props

    let button
    if (insult) {
      button = (
        <ClipboardButton
          className={`${this.state.copied
            ? styles.buttonActive
            : ''} ${styles.button}`}
          option-text={this.getText}
          onSuccess={this.onSuccess}
        >
          {this.state.copied ? 'successully copied' : 'Share!'}
        </ClipboardButton>
      )
    } else {
      button = (
        <button className={`${styles.buttonDisabled} ${styles.button}`}>
          Share!
        </button>
      )
    }

    return (
      <div className={styles.actionButtons}>
        {button}
      </div>
    )
  }
}

export default connect(state => ({
  insult: state.insult
}))(Button)
