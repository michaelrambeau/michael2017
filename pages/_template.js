import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'
import t from '../src/utils/typography'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Spritesheet from '../src/svg/Spritesheet'

import '../css/main.scss'
import '../css/helpers.sass'
import '../css/print.sass'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any
    }
  },
  render() {
    return (
      <div id="site-layout">
        <Helmet
          title={config.siteTitle}
          meta={[
            {
              name: 'description',
              content:
                'Michael Rambeau, web development expert in Osaka, Japan. Specialities: HTML5, React, Redux, node.js microservices, Responsive Web Design.'
            },
            { name: 'keywords', content: 'Osaka, React, node.js microservices' }
          ]}
        />
        <Spritesheet />
        <Header location={this.props.location} />
        <div
          id="site-content"
          style={{
            margin: `0 auto`,
            maxWidth: 960
          }}
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
