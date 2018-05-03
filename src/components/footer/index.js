import { connect } from 'react-redux'
import Footer from './ui.js'

const mapStateToProps = ({ paths }) => ({ paths })

export default connect(mapStateToProps, {})(Footer)
