import { graphql, useStaticQuery } from "gatsby"

export interface SiteMetadata {
  title: string
  tag: string
  description: string
  siteUrl: string
  social: {
    twitter: string
  }
}

interface Data {
  site: {
    siteMetadata: SiteMetadata
  }
}

const siteMetadataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tag
        description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`

export const useSiteMetadata = () => {
  const { site }: Data = useStaticQuery(siteMetadataQuery)

  return site.siteMetadata
}
