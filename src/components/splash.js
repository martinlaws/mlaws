import React from "react"
import styled from "styled-components"
import { Emoji } from "./emoji"
import { Main, H1 as BaseH1, StyledA, StyledLink } from "./base"
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

const P = styled.p`
  color: var(--fontPrimary);
  margin-bottom: 0.25rem;
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 400;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const H1 = styled(BaseH1)`
  margin-bottom: 0.5rem;
`

const Subhead = styled(P)`
  padding-bottom: 2rem;
  margin-top: 0;
`

const BioSection = styled.div`
  margin: 2rem 0;
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
          <BioSection>
            <P>Hi, there!</P>
            <H1>
              I'm Martin <Emoji symbol="👋🏻" label="waving hand" />
            </H1>
          </BioSection>
          <P>
            I'm a Senior UX Developer @{" "}
            <StyledA
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopify
            </StyledA>
            ,
          </P>
          <P>
            frequent <StyledLink to="/speaking/">speaker</StyledLink>, past{" "}
            <StyledA
              href="https://consultlowtide.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              founder
            </StyledA>
            ,
          </P>
          <P>
            fantasy{" "}
            <StyledA
              href="https://www.fantasysurvivorgame.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Survivor
              <Emoji symbol="™" label="Trademark symbol" />
            </StyledA>{" "}
            player, and <StyledLink to="/maya">dog father</StyledLink>.
          </P>
        </article>
      </Main>
    </>
  )
}

export default Splash
