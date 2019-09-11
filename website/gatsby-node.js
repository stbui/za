// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
const path = require(`path`)

// // You can delete this file if you're not using it
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const template = path.resolve(`src/pages/template.tsx`)

  // return graphql(`
  //   {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fileAbsolutePath
  //           tableOfContents(pathToSlugField: "frontmatter.path")
  //           frontmatter {
  //             path
  //             redirect_from
  //           }
  //         }
  //       }
  //     }
  //     allDocsYaml {
  //       edges {
  //         node {
  //           section
  //           paths
  //         }
  //       }
  //     }
  //   }
  // `).then(result => {
  //   if (result.errors) {
  //     return Promise.reject(result.errors)
  //   }

  //   console.log(result)
  // })

  createPage({
    path: "/summarize",
    component: template,
  })

  createPage({
    path: "/quickStart",
    component: template,
  })
  createPage({
    path: "/project",
    component: template,
  })
  createPage({
    path: "/attention",
    component: template,
  })
  createPage({
    path: "/participation",
    component: template,
  })
  createPage({
    path: "/changelog",
    component: template,
  })
}
