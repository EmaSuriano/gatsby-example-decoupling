const { pathPrefix, manifestOptions, siteMetadata } = require("./site.config")

module.exports = {
  siteMetadata,
  pathPrefix,

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
      options: manifestOptions,
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@components": "src/components",
          "@hooks": "src/hooks",
          "@images": "src/images",
          "@pages": "src/pages",
          "@styles": "src/styles",
          "@templates": "src/templates",
          "@utils": "src/utils",
          "@static": "static",
        },
        extensions: ["ts", "tsx", "png", "jpg", "jpeg", "gif"],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/styles/typography",
        omitGoogleFont: true,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-typescript",
  ],
}
