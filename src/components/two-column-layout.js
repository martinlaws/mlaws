import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import styled from "styled-components"
import { devices } from "./base"
import { Emoji } from "./emoji"

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

const Main = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 0;
  overflow-y: scroll auto;
  min-height: calc(100vh - 8rem);

  @media ${devices.tablet} {
    min-height: 100vh;
  }
`

const Footer = styled.footer`
  background: var(--contentBg);
  color: var(--fontPrimary);
  min-height: 4rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;

  @media ${devices.tablet} {
    flex-flow: column nowrap;
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

        <Main>
          {children}

          <Footer>
            <div>
              Made with
              <Emoji label="heart" symbol="♥️" marginLoose />+
              <Emoji label="coffee" symbol="☕" marginLoose />
              in
              <Emoji label="Canada" symbol="🇨🇦" marginLoose />
            </div>
          </Footer>
        </Main>
      </TwoColumnGrid>
    </>
  )
}

export default TwoColumnLayout
