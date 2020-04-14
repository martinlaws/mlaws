import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
import Table from "./table"
// import SEO from "./seo"
import { useTheme } from "../hooks/theme-context"

const Talks = () => {
  const [theme] = useTheme()

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         talks {
  //           title
  //           date
  //         }
  //       }
  //     }
  //   `
  // )

  // const metaDescription = description || site.siteMetadata.description

  const {
    fontPrimary,
    linkPrimary,
    // fontSecondary,
    // sidebarBg,
    // accentPrimary,
    // accentSecondary,
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
    margin-bottom: 0;
  `

  const CTALink = styled(Link)`
    width: max-content;
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

  // const InlineLink = styled.a`
  //   color: ${accentPrimary};
  //   font-family: "IBM Plex Sans", serif;
  //   font-weight: 600;
  //   text-decoration: none;
  //   padding-top: 3px;
  //   border-style: solid;
  //   border-width: 0px 0px 2px;
  //   border-color: transparent;
  //   line-height: 1.4em;
  //   transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

  //   &.accent {
  //     color: ${accentSecondary};
  //   }

  //   &:hover {
  //     color: ${linkPrimary};
  //     border-color: ${other};
  //   }
  // `

  const site = {
    talks: [
      {
        title: "Weekly lectures @ Lighthouse Labs",
        date: "January 2016-Present",
        path: "/writing/high-tide-low-tide/",
      },
      {
        title: "Remote 101: How to facilitate kick-ass remote technical work",
        date: "March 2020",
        path: "/writing/design-thinking-for-developers/",
      },
      {
        title: "Design Thinking for Developers",
        date: "January 2020",
        path: "/writing/design-thinking-for-developers/",
      },
      {
        title: "InVision DSM",
        date: "November 2019",
        path: "/writing/invision-dsm/",
      },
    ],
  }

  return (
    <Main>
      <H1>Selected speaking</H1>

      <Table data={site.talks} />
      <CTALink to="/">Go back to the homepage</CTALink>
    </Main>
  )
}

export default Talks
