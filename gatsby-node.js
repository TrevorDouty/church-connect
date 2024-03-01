// const path = require("path");

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   // Query for user data
//   const result = await graphql(`
//     query {
//       cms {
//         User {
//           id
//         }
//       }
//     }
//   `);

//   // Error handling
//   if (result.errors) {
//     throw result.errors;
//   }

//   // Create pages for each user
//   result.data.cms.User.forEach((user) => {
//     createPage({
//       path: `/users/${user.id}`, // Define the path for the page
//       component: path.resolve("./src/templates/user.js"), // Specify the template component
//       context: {
//         userId: user.id, // Pass any additional data as context
//       },
//     });
//   });
// };
