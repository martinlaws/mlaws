import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "./sidebar"
import { useTheme } from "../hooks/theme-context"
import styled from "styled-components"

function TwoColumnLayout({ children }) {
  const [theme, dispatch] = useTheme()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleTheme = event => {
    event.preventDefault()

    const newTheme = theme.name === "dark" ? "light" : "dark"

    console.log(newTheme)

    dispatch({ type: `SET_THEME`, themeName: newTheme })
  }

  const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 0 5rem;
  `

  const IconButton = styled.span`
    margin-bottom: 0;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
  `

  return (
    <>
      <div
        style={{
          display: `grid`,
          gridTemplateColumns: `1fr 4fr`,
          minHeight: `100vh`,
          width: `100vw`,
          backgroundColor: theme.palette.contentBg,
        }}
      >
        <Sidebar siteTitle={data.site.siteMetadata.title} palette={theme} />

        <Main
        // style={{
        //   display: `flex`,
        //   flexFlow: `column nowrap`,
        //   justifyContent: `center`,
        //   padding: `0 5rem`,
        //   flexBasis: `80%`,
        // }}
        >
          {children}
        </Main>
      </div>

      <IconButton
        aria-label="Toggle colour theme"
        onClick={toggleTheme}
        style={{}}
      >
        🎨
      </IconButton>
    </>
  )
}

export default TwoColumnLayout
