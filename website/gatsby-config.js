module.exports = {
  siteMetadata: {
    title: `Stbui`,
    description: `stbui React`,
    author: `@stbui`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "guide",
        path: `${__dirname}/../docs`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages/za-button`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages/za-elevation`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages/za-switch`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages/za-checkbox`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages/za-alert`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: `${__dirname}/../packages/za-avatar`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          "gatsby-remark-code-modifiers",
          "gatsby-remark-title",
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              offsetY: 80,
              icon: "<span>#</span>",
            },
          },
        ],
      },
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NWWM5K3",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    "gatsby-plugin-typescript",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
