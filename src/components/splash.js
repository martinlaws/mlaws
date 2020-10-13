import React from "react"
import styled from "styled-components"
import { Emoji } from "./emoji"
import {
  devices,
  H1 as BaseH1,
  StyledA as BaseStyledA,
  StyledLink as BaseStyledLink,
} from "./base"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "martin.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  max-width: 600px;
`

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  margin: 1rem 0.5rem;
  color: var(--fontPrimary);
  max-width: 1440px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;

  @media ${devices.tablet} {
    padding: 2rem;
  }

  @media ${devices.laptop} {
    grid-template-columns: 1fr 1fr;
  }

  .padded-bottom {
    margin-bottom: 2rem;
  }
`

const P = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 0.25rem;
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 400;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const StyledA = styled(BaseStyledA)`
  &:hover,
  &:focus {
    color: var(--fontSecondary);
  }
`

const StyledLink = styled(BaseStyledLink)`
  &:hover,
  &:focus {
    color: var(--fontSecondary);
  }
`

const H1 = styled(BaseH1)`
  margin-bottom: 0.5rem;
`

const Subhead = styled(P)`
  padding-bottom: 2rem;
  margin-top: 0;
`

function Splash() {
  const data = useStaticQuery(query)
  return (
    <>
      <Main>
        <ImageContainer>
          <Image
            fluid={data.fileName.childImageSharp.fluid}
            alt="Pixel art version of Martin's headshot"
          />
        </ImageContainer>
        <article>
          <P>
            Hi, I'm Martin <Emoji symbol="👋🏻" label="waving hand" />
          </P>
          <H1>Senior UX Developer</H1>
          <Subhead>
            and proud <StyledLink to="/maya">dogfather</StyledLink>.
          </Subhead>
          <P>
            Thrilled to be the new guy at{" "}
            <StyledA
              href="https://ux.shopify.com/"
              target="_blank"
              className="accent"
            >
              Shopify
            </StyledA>
            .
          </P>
          <P>
            Previously:{" "}
            <StyledA href="https://consultlowtide.ca" target="_blank">
              Low Tide Consulting
            </StyledA>
            ,{" "}
            <StyledA href="https://www.lighthouselabs.ca/" target="_blank">
              Lighthouse Labs
            </StyledA>
            , and{" "}
            <StyledA
              href="https://www.linkedin.com/in/martinlaws/"
              target="_blank"
            >
              others
            </StyledA>
            .
          </P>
          <P className="padded-bottom">
            Wannabe chef, extremely competitive fantasy{" "}
            <StyledA
              href="https://www.fantasysurvivorgame.com/"
              target="_blank"
            >
              Survivor
              <Emoji symbol="™" label="Trademark symbol" />
            </StyledA>{" "}
            player, and all-around <Emoji symbol="💩" label="shit" /> disturber.
          </P>
        </article>
      </Main>
    </>
  )
}

export default Splash
