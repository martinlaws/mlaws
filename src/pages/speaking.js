import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SingleColumnMain as Main, H1 } from "../components/base"
import Table from "../components/table"
import { talks } from "../utilities/constants"

const Speaking = () => {
  return (
    <Layout>
      <SEO
        title="Speaking // Martin Laws // UX Developer"
        description="Words I spoke."
      />

      <Main>
        <H1>Words I spoke</H1>

        <Table data={talks} />
      </Main>
    </Layout>
  )
}

export default Speaking
