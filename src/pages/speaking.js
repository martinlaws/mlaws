import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SingleColumnMain as Main, H1 } from "../components/base"
import Table from "../components/table"
import { talks } from "../utilities/constants"

const Speaking = () => {
  return (
    <Layout>
      <SEO title="Speaking // Martin Laws // UX Developer" />

      <Main>
        <H1>Selected speaking</H1>

        <Table data={talks} />
      </Main>
    </Layout>
  )
}

export default Speaking
