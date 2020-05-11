import React, { FC } from "react"
import { Helmet } from "react-helmet"

import { Gallery, Hero } from "@components/achievements"
import { Layout } from "gatsby-shared/src/components"
import { useSiteMetadata } from "gatsby-shared/src/hooks"

/** The website's landing page. */
const AchievementsPage: FC = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <Layout>
      <Helmet title={siteMetadata.title} titleTemplate="Gallery" />
      <Hero />
      <Gallery />
    </Layout>
  )
}

export default AchievementsPage
