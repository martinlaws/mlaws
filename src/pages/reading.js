import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { SingleColumnMain as Main, H1 } from "../components/base"
import { reading } from "../utilities/constants"

const Reading = () => {
  return (
    <Layout>
      <SEO
        title="Reading // Martin Laws // UX Developer"
        description="Currently on my side table"
      />
      <Main>
        <H1>Currently on my side table</H1>

        <Table data={reading} />
      </Main>
    </Layout>
  )
}

export default Reading
