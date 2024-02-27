// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const result = await graphql(`
//     {
//       cms {
//         User {
//           Address1
//           Address2
//           church {
//             address1
//             churchImg
//             city
//             country
//             groups {
//               groupImg
//               groupName
//               isPublic
//               meetingDays
//               meetingLocation
//               meetingTime
//             }
//             isActive
//             name
//             phone
//             state
//             websiteUrl
//             zipcode
//           }
//           city
//           country
//           state
//           isActive
//           isLeader
//           isChurchAdmin
//           isGroupsAdmin
//           isCurriculumAdmin
//           firstName
//           lastName
//           phone
//           email
//           zipCode
//         }
//       }
//     }
//   `);
//   const users = result.cms.User;
//   console.log("users", users);
//   users.forEach(user => {
//     createPage({
//       path: `/user/${user.id}`

//     })
//   })
// };
