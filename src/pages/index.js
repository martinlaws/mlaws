import React from "react"

import Layout from "../components/layout"
import Splash from "../components/splash"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Martin Laws // Development Manager"
        description="I'm a Development Manager @ Shopify, design thinker + tech speaker, recovering entrepreneur, and dog father."
      />
      <Splash />
    </Layout>
  )
}

export default IndexPage
