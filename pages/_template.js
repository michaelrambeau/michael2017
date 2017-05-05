import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import Helmet from "react-helmet"
import { config } from "config"
import t from "../src/utils/typography"
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Spritesheet from '../src/svg/Spritesheet'

import '../css/main.scss'
import '../css/helpers.sass'
import '../css/print.sass'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div id="site-layout">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Michael Rambeau, web developer in Osaka, Japan" },
            { name: "keywords", content: "React, node.js microservices" },
          ]}
        />
        <Spritesheet />
        <Header location={this.props.location} />
        <div
          id="site-content"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${t.rhythm(1)} ${t.rhythm(3 / 4)}`,
            paddingTop: t.rhythm(1)
          }}
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
})
