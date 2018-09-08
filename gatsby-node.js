// In your gatsby-node.js
const path = require("path");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    // Add slug as a field on the node.
    const slug = parsedFilePath.name;
    createNodeField({ node, name: "slug", value: slug });
  }
};
