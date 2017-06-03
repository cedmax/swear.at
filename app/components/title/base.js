import {connect} from 'react-redux'
import {updateName, confirmName} from 'store/actions'

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
    window.history.replaceState(null, this.props.name, `/${this.props.name.toLowerCase()}`)
    this.props.dispatch(confirmName(this.props.name))
  }

  render () {
    const {styles} = this.props

    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <h1 className={styles.title}>
          <span className={styles.span}>Swear at</span> <input
            className={styles.input}
            value={this.props.name}
            name="name"
            type="text"
            autoComplete="off"
            onChange={this.handleNameChange}
          />
        </h1>
        <div className={styles.submit}><input type="submit" /></div>
      </form>
    )
  }
}

export default connect(state => ({
  name: state.tempName
}))(Title)
