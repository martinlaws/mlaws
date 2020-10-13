import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import styled from "styled-components"
import { devices } from "./base"

const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 1rem;
  overflow-y: scroll auto;

  @media ${devices.tablet} {
    padding: 5rem;
  }
`

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content auto;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--contentBg);

  @media ${devices.tablet} {
    grid-template-columns: max-content auto;
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
