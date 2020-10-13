import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { SingleColumnMain as Main, H1 } from "../components/base"
import { writing } from "../utilities/constants"

const Writing = () => {
  return (
    <Layout>
      <SEO title="Writing // Martin Laws // UX Developer" />
      <Main>
        <H1>Things I remembered to write down</H1>

        <Table data={writing} />
      </Main>
    </Layout>
  )
}

export default Writing
