import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useTheme } from "../hooks/theme-context"
import styled from "styled-components"
import Emoji from "./emoji"

function Splash() {
  const [theme, dispatch] = useTheme()

  const Main = styled.main`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 0.5rem;
    color: var(--fontPrimary);

    .padded-bottom {
      margin-bottom: 2rem;
    }
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
    margin-bottom: 0.25rem;
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

  const InlineLink = styled.a`
    color: var(--accentPrimary);
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
      color: var(--accentSecondary);
    }

    &:hover {
      color: var(--linkPrimary);
      border-color: var(--other);
    }
  `

  // useEffect(() => {
  //   dispatch({ type: `SET_THEME`, themeName: `synthWave84` })
  // }, [])

  return (
    <>
      <Main>
        <P>
          Hi, I'm Martin <Emoji symbol="👋" label="waving hand" />
        </P>
        <H1 className="padded-bottom">Senior UX Developer and proud dog dad</H1>
        <P>
          Thrilled to be the new guy at{" "}
          <InlineLink
            href="https://ux.shopify.com/"
            target="_blank"
            className="accent"
          >
            Shopify
          </InlineLink>
          .
        </P>
        <P>
          Previously:{" "}
          <InlineLink href="https://consultlowtide.ca" target="_blank">
            Low Tide Consulting{" "}
          </InlineLink>
          ,{" "}
          <InlineLink href="https://www.lighthouselabs.ca/" target="_blank">
            Lighthouse Labs
          </InlineLink>
          , and{" "}
          <InlineLink
            href="https://www.linkedin.com/in/martinlaws/"
            target="_blank"
          >
            others
          </InlineLink>
          .
        </P>
        <P className="padded-bottom">
          Wannabe chef, extremely competitive fantasy{" "}
          <InlineLink
            href="https://www.fantasysurvivorgame.com/"
            target="_blank"
          >
            Survivor
            <Emoji symbol="™" label="Trademark symbol" />
          </InlineLink>{" "}
          player, and all-around <Emoji symbol="💩" label="shit" /> disturber.
        </P>
        <div>
          <CTALink to="/work/">SEE MY WORK</CTALink>
          <CTALink to="/maya/">SHOW ME THE DOG ALREADY</CTALink>
        </div>
      </Main>
    </>
  )
}

export default Splash
