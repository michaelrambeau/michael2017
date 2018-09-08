import React from "react";

import Home from "../components/Home";
import { getMarkdown } from "../helpers/md";

export default class Index extends React.Component {
  render() {
    const { data } = this.props;
    return <Home md={getMarkdown(data)} />;
  }
}

export const pageQuery = graphql`
  query HomeData {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          fields {
            slug
          }
        }
      }
    }
  }
`;
