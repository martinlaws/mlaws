import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SingleColumnMain as Main, H1 } from "../components/base"
import Table from "../components/table"
import { projects } from "../utilities/constants"

const Code = () => {
  return (
    <Layout>
      <SEO title="Code // Martin Laws // UX Developer" />

      <Main>
        <H1>Selected projects</H1>

        <Table data={projects} />
      </Main>
    </Layout>
  )
}

export default Code
