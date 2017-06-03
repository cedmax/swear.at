import { connect } from 'react-redux'
import {updateInsult, updateName} from '../../store/actions';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleInsultChange = this.handleInsultChange.bind(this);
  }

  handleFieldChange(action, value) {
    console.log(arguments)
    this.props.dispatch(action(value));
  }

  handleInsultChange(e) {
    this.handleFieldChange(updateInsult, e.target.value);
  }

  handleNameChange(e) {
    this.handleFieldChange(updateName, e.target.value);
  }

  render() {
    const { styles } = this.props;
    console.log(this.props)
    return (
        <form className={styles.panel}>
          Dear <input value={this.props.name} name="name" type="text" onChange={this.handleNameChange} />
          you're such a 
          <select value={this.props.insult} name="insult" onChange={this.handleInsultChange}>
            <option>Please pick your insule</option>
            <option>Wanker</option>
            <option>Dick</option>
            <option>Twat</option>
            <option>Prick</option>
            <option>Arsehole</option>
            <option>Tosser</option>
            <option>Maggot</option>
          </select>
      </form>
    );
  }
}

export default connect(
  (state) => ({
    name: state.name,
    insult: state.insult
  })
)(Form)
