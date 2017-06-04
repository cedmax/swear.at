import {connect} from 'react-redux'
import {updateInsult} from 'store/actions'
import TitleSmall from 'components/title/small'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.handleInsultChange = this.handleInsultChange.bind(this)
  }

  handleFieldChange (action, value) {
    this.props.dispatch(action(value))
  }

  handleInsultChange (e) {
    let insult = e.target.value
    if (insult === 'Choose') {
      insult = ''
    }
    window.history.replaceState(null, this.props.name, `/${this.props.name.toLowerCase()}${insult ? '/' + insult.toLowerCase(): ''}`)

    this.props.dispatch(updateInsult(insult))
  }

  render () {
    const {styles} = this.props
    return (
      <div className={styles.header}>
        <TitleSmall name={this.props.name} />
        <select
          className={styles.select}
          value={this.props.insult}
          name="insult"
          onChange={this.handleInsultChange}
        >
          <option>Choose</option>
          <option>Wanker</option>
          <option>Dick</option>
          <option>Twat</option>
          <option>Prick</option>
          <option>Arsehole</option>
          <option>Tosser</option>
          <option>Maggot</option>
        </select>
      </div>
    )
  }
}

export default connect(state => ({
  name: state.name,
  insult: state.insult
}))(Form)
