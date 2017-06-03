import {connect} from 'react-redux'
import Header from 'components/header'
import Card from 'components/card'
import Title from 'components/title'
import CopyButton from 'components/copy-button'

function Main (props) {
  if (props.name) {
    return (
      <div>
        <Header />
        <Card />
        <CopyButton />
      </div>
    )
  } else {
    return <Title />
  }
}

export default connect(state => ({
  name: state.name
}))(Main)
