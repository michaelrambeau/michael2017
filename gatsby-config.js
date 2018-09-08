module.exports = {
  siteMetadata: {
    title: `Michael Rambeau web developer in Osaka`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/md/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`
    }
  ]
};
