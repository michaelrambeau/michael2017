import React from "react";

import Projects from "../components/Projects";
import { getMarkdown } from "../helpers/md";

class ProjectsPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>Open-source projects</h1>
        <Projects md={getMarkdown(data)} />
      </div>
    );
  }
}

export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsData {
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
