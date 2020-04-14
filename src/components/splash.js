import React from "react"
import { Link } from "gatsby"
import { useTheme } from "../hooks/theme-context"
import styled from "styled-components"

function Splash() {
  const [theme] = useTheme()
  const { fontPrimary, fontSecondary, linkPrimary } = theme.palette

  const H4 = styled.h4`
    color: ${fontSecondary};
    font-family: "IBM Plex Sans", sanserif;
    font-weight: 400;
  `

  const H1 = styled.h1`
    color: ${fontPrimary};
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
  `

  const P = styled.p`
    color: ${fontSecondary};
    font-family: "IBM Plex Sans", sanserif;
    font-style: italic;
  `

  return (
    <>
      <main
        style={{
          display: `flex`,
          flexFlow: `column nowrap`,
          margin: `1rem 0.5rem`,
          color: fontPrimary,
        }}
      >
        <H4>
          Hi, I'm Martin{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </H4>
        <H1>I design with code</H1>
        <P>
          I'm a designer-developer crafting beautiful, functional, inclusive,
          and accessible web experiences. My consulting work is focused on front
          end development, design thinking, product prototyping, and technical
          strategy.
        </P>
        <Link to="/page-2/" style={{ color: linkPrimary }}>
          Go to page 2
        </Link>
      </main>
    </>
  )
}

export default Splash
