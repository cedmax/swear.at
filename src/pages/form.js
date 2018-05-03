import React, { Fragment } from 'react'
import Header from '../components/header'
import Card from '../components/card'
import Footer from '../components/footer'

export default class Form extends React.Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Card />
        <Footer />
      </Fragment>
    )
  }
}
