const path = require("path")

module.exports = Object.freeze({
  pathPrefix: "/",
  postsPerFirstPage: 6,
  postsPerPage: 6,
  siteMetadata: {
    title: "AxoCare NGO",
    titleShort: "AC",
    tag: "Axolotls are first",
    description:
      "AxoCare is the first fake NGO to save Axolotl from extinction.",
    siteUrl: "http://localhost:8000",
    logo: path.resolve(__dirname, "src/images/logo.png"),
    contactEmail: "team@projectunicorn.dev",
    royEmail: "roy.moran@projectunicorn.dev",
    author: "EmaSuriano",
    social: {
      twitter: "@emasuriano",
    },
  },
  manifestOptions: {
    name: "Project Unicorn",
    short_name: "Project Unicorn",
    start_url: "/projects",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    display: "minimal-ui",
    icon: "src/images/logo.png",
  },
})
