// In your gatsby-node.js
const path = require("path");

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    // if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
    //   slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    // } else if (parsedFilePath.dir === ``) {
    //   slug = `/${parsedFilePath.name}/`;
    // } else {
    //   slug = `/${parsedFilePath.dir}/`;
    // }

    // Add slug as a field on the node.
    const slug = parsedFilePath.name;
    console.log("Node!", parsedFilePath, slug);
    createNodeField({ node, name: "slug", value: slug });
  }
};
