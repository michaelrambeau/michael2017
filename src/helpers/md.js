export function getMarkdown(data) {
  const reducer = (acc, node) => ({ ...acc, [node.fields.slug]: node.html });
  const markdownBySlug = data.allMarkdownRemark.edges
    .map(edge => edge.node)
    .reduce(reducer, {});
  return markdownBySlug;
}
