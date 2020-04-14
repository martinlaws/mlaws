import React from "react"

import Layout from "../components/layout"
import Splash from "../components/splash"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Splash />
    </Layout>
  )
}

export default IndexPage
