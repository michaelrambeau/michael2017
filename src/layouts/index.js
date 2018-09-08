import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spritesheet from "../svg/Spritesheet";

import "../css/main.css";
import "../css/helpers.css";
import "../css/print.css";

export default class Layout extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div id="site-layout">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content:
                "Michael Rambeau, full-stack web development expert in Osaka, Japan. Specialties: HTML5, React, Redux, Node.js micro-services, Responsive Web Design."
            },
            {
              name: "keywords",
              content: "Osaka, React, Node.js micro-services"
            }
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Lato"
            rel="stylesheet"
          />
        </Helmet>
        <Spritesheet />
        <Header location={this.props.location} />
        <div
          id="site-content"
          style={{
            margin: `0 auto`,
            maxWidth: 960
          }}
        >
          {/* {withProps({ md: markdownBySlug })(this.props.children())} */}
          {this.props.children()}
        </div>
        <Footer />
      </div>
    );
  }
}

export const pageQuery = graphql`
  query app {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
