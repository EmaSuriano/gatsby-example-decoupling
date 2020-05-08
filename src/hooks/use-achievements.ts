import { graphql, useStaticQuery } from "gatsby"

import { FluidObject } from "gatsby-image"

const achievementsQuery = graphql`
  query {
    allFile(filter: { dir: { regex: "/achievements/" } }) {
      nodes {
        id
        name

        childImageSharp {
          original {
            width
            height
          }
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

interface FileNode {
  id: string
  name: string
  childImageSharp: {
    original: {
      width: number
      height: number
    }
    fluid: FluidObject
  }
}

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()

export const useAchievements = () => {
  const nodes: FileNode[] = useStaticQuery(achievementsQuery).allFile.nodes
  const achievements = nodes
    .sort(() => Math.random() - 0.5)
    .map(({ id, name, childImageSharp }) => ({
      id,
      caption: name
        .split("-")
        .map((s, i) => (i === 0 ? capitalize(s) : s.toLowerCase()))
        .join(" "),
      ...childImageSharp.original,
      ...childImageSharp.fluid,
    }))

  return achievements
}
