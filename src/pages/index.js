import React from "react"

import Layout from "../components/layout"
import Splash from "../components/splash"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Martin Laws | UX Developer"
        description="I'm a Senior UX Developer @ Shopify, design thinker + tech speaker, recovering entrepreneur, and dog father."
        image="images/martin.png"
      />
      <Splash />
    </Layout>
  )
}

export default IndexPage
