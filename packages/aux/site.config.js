const path = require("path")
const logoPath = `../gatsby-shared/src/images/logo.png`

module.exports = Object.freeze({
  pathPrefix: "/",
  postsPerFirstPage: 3,
  postsPerPage: 3,
  siteMetadata: {
    title: "AxoCare NGO",
    titleShort: "AC",
    tag: "Where Axolotls are first",
    description:
      "AxoCare is the first fake NGO to save Axolotl from extinction.",
    siteUrl: "http://localhost:8000",
    logo: logoPath,
    author: "EmaSuriano",
    social: {
      twitter: "@emasuriano",
    },
  },
  manifestOptions: {
    name: "AxoCare NGO",
    short_name: "AxoCare NGO",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "minimal-ui",
    icon: logoPath,
  },
})
