import React from 'react'
// import { Link } from 'react-router'
// import { prefixLink } from 'gatsby-helpers'
import Icon from '../src/svg/Icon'
import Introduction from '../src/components/Introduction'
import Experience from '../src/components/Experience'
import Skills from '../src/components/Skills'
// import Helmet from 'react-helmet'
// import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div id="homepage">
        <Introduction />
        <Skills />
        <Experience />
      </div>
    )
  }
}
