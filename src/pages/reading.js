import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { SingleColumnMain as Main, H1, H2, Ital } from "../components/base"
import { currentlyReading, recentlyRead } from "../utilities/constants"
import styled from 'styled-components'

const Subhead = styled.p`
  margin-top: none
`

const PageTitle = styled(H1)`
  margin-bottom: 0;
`

const MainWithSmallerGap = styled(Main)`
  gap: 2rem;
`

const ReadingH2 = styled(H2)`
  margin-bottom: -3rem;
`

const Reading = () => {
  return (
    <Layout>
      <SEO
        title="Reading // Martin Laws // UX Developer"
        description="Currently on my side table"
      />
      <MainWithSmallerGap>
        <div>
          <PageTitle>Books I read</PageTitle>
          <Subhead><Ital>(or more likely listened to)</Ital></Subhead>
        </div>
        <ReadingH2>Currently reading:</ReadingH2>
        <Table data={currentlyReading} />

        <ReadingH2>Recently read:</ReadingH2>
        <Table data={recentlyRead} />
      </MainWithSmallerGap>
    </Layout>
  )
}

export default Reading
