import React from "react"
import { Link } from "gatsby"

// import Layout from "./layout"
// import SEO from "./seo"
import styled from "styled-components"

const Beans = () => {
  const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 0.5rem;
    color: var(--fontPrimary);
  `

  const H1 = styled.h1`
    color: var(--fontPrimary);
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
  `

  const P = styled.p`
    color: var(--fontSecondary);
    font-family: "IBM Plex Sans", sanserif;
    font-style: italic;
  `

  const CTALink = styled(Link)`
    color: var(--linkPrimary);
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
      color: var(--other);
      border-color: var(--fontPrimary);
    }

    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  `

  return (
    <Main>
      <H1>Beans</H1>
      <P>Beans coming soon</P>
      <CTALink to="/">Go back to the homepage</CTALink>
    </Main>
  )
}

export default Beans
