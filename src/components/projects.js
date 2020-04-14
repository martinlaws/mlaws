import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import styled from "styled-components"

import { useTheme } from "../hooks/theme-context"

const Projects = () => {
  const [theme] = useTheme()

  const {
    fontPrimary,
    fontSecondary,
    linkPrimary,
    accentPrimary,
    accentSecondary,
    other,
  } = theme.palette
  const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 0.5rem;
    color: ${fontPrimary};
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

  const CTALink = styled(Link)`
    color: ${linkPrimary};
    font-family: "IBM Plex Sans", serif;
    font-weight: 600;
    text-decoration: none;
    padding-top: 3px;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    letter-spacing: 0.04em;
    line-height: 1.4em;
    text-transform: uppercase;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

    &:hover {
      color: ${other};
      border-color: ${fontPrimary};
    }

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  `

  const InlineLink = styled.a`
    color: ${accentPrimary};
    font-family: "IBM Plex Sans", serif;
    font-weight: 600;
    text-decoration: none;
    padding-top: 3px;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    line-height: 1.4em;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

    &.accent {
      color: ${accentSecondary};
    }

    &:hover {
      color: ${linkPrimary};
      border-color: ${other};
    }
  `
  return (
    <Main>
      <H1>Selected projects</H1>
      <P>Projects coming soon</P>
      <CTALink to="/">Go back to the homepage</CTALink>
    </Main>
  )
}

export default Projects
