// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// exports.createPages = ({ actions, graphql }) => {
//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fileAbsolutePath
//             tableOfContents(pathToSlugField: "frontmatter.path")
//             frontmatter {
//               path
//               redirect_from
//             }
//           }
//         }
//       }
//       allDocsYaml {
//         edges {
//           node {
//             section
//             paths
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors)
//     }

//     const flatArray = []
//     result.data.allDocsYaml.edges.forEach(async ({ node }) => {
//       node.paths.forEach(path => flatArray.push(path))
//     })
//   })
// }
