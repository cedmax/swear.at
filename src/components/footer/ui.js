import React from 'react'
import classNames from './style.module.css'

export default class Form extends React.Component {
  render () {
    const { paths: pathObj } = this.props
    const paths = Object.keys(pathObj)

    return (
      <footer className={classNames.footer}>
        Swear.at is the happy home of:
        {paths.map(path => (
          <a key={path} href={`/${path}`}>
            {pathObj[path]}
          </a>
        ))}
      </footer>
    )
  }
}
