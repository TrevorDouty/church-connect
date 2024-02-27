/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const fetch = require("isomorphic-fetch");
const { createHttpLink } = require("apollo-link-http");

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-tailwindcss",
    {
      resolve: "gatsby-source-graphql", // <- Configure plugin
      options: {
        typeName: "hasura",
        fieldName: "cms", // <- fieldName under which schema will be stitched
        createLink: (pluginOptions) => {
          return createHttpLink({
            uri: `${process.env.GATSBY_HASURA_GRAPHQL_URL}`,
            headers: {
              "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
            },
            fetch,
          });
        },
      },
    },
  ],
};
