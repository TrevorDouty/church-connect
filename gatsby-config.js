/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-tailwindcss',   {
    resolve: "gatsby-source-graphql", // <- Configure plugin
    options: {
      typeName: "HASURA",
      fieldName: "hasura", // <- fieldName under which schema will be stitched
      url: process.env.GATSBY_HASURA_GRAPHQL_URL,
      refetchInterval: 10 // Refresh every 10 seconds for new data
    }
  }],
}
