import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import styled from "styled-components"
import { devices } from "./base"

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 5rem;
  overflow-y: scroll auto;
`

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--contentBg);

  @media ${devices.tablet} {
    grid-template-columns: 280px auto;
  }
`

function TwoColumnLayout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  return (
    <>
      <TwoColumnGrid>
        <Sidebar siteTitle={title} />

        <Main>{children}</Main>
      </TwoColumnGrid>
    </>
  )
}

export default TwoColumnLayout
