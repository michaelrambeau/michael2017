import React from "react";

import Page from "../components/Japanese";
import { getMarkdown } from "../helpers/md";

const JapanesePage = ({ data }) => {
  return (
    <div className="japanese">
      <Page md={getMarkdown(data)} />
    </div>
  );
};

export const pageQuery = graphql`
  query JapaneseData {
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

export default JapanesePage;
