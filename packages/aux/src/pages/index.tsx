import React, { FC } from "react"
import { Helmet } from "react-helmet"

import { Hero, About, Faq, Testimonial } from "@components/index-page"
import { Layout } from "gatsby-shared/src/components"
import { useSiteMetadata } from "gatsby-shared/src/hooks"

/** The website's landing page. */
const IndexPage: FC = () => {
  const siteMetadata = useSiteMetadata()

  return (
    <Layout>
      <Helmet title={siteMetadata.title} titleTemplate="" />
      <h1 className="visually-hidden">Welcome</h1>
      <Hero />
      <About />
      <Testimonial />
      <Faq />
    </Layout>
  )
}

export default IndexPage
