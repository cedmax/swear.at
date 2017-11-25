import {connect} from 'react-redux'
import {updateInsult} from '../../store/actions'
import {bindActionCreators} from 'redux'
import Header from './ui.js'

const mapStateToProps = ({name, insult}) => ({ name, insult })
const mapDispatchToProps = (dispatch) => bindActionCreators({ updateInsult }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)
