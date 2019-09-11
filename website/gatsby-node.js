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

  return createPage({
    path: "/test",
    component: template,
  })
}
