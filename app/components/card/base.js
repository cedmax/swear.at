import {connect} from 'react-redux'

const Card = props => {
  return (
    <div className={props.styles.card}>
      NAME: {props.name}<br />
      INSULT: {props.insult}
    </div>
  )
}

export default connect(state => state)(Card)
