import {connect} from 'react-redux'
import {updateName, confirmName} from '../../store/actions'
import {bindActionCreators} from 'redux'
import Title from './ui.js'

const mapStateToProps = ({tempName, insult}) => ({tempName, insult})
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateName }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Title)
