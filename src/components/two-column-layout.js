import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import { useTheme } from "../hooks/theme-context"
import styled from "styled-components"

function TwoColumnLayout({ children }) {
  const [theme] = useTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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

    @media only screen and (min-width: 796px) {
      grid-template-columns: 280px auto;
    }
  `

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
