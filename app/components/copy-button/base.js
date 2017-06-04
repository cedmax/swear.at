import ClipboardButton from 'react-clipboard.js'

export default class MyView extends React.Component {
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
    const {styles} = this.props
    return (
      <div className={styles.actionButtons}>
        <ClipboardButton
          className={`${this.state.copied
            ? styles.buttonActive
            : ''} ${styles.button}`}
          option-text={this.getText}
          onSuccess={this.onSuccess}
        >
          {this.state.copied ? 'successully copied' : 'Share!'}
        </ClipboardButton>
      </div>
    )
  }
}
