import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main, H1 as BaseH1, StyledA } from "../components/base"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "low-tide.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  max-width: 600px;
  align-self: flex-start;
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

const LowTide = () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO
        title="Low Tide Consulting // Martin Laws"
        description="Low Tide, a UX Development consulting practice founded by Martin Laws."
      />
      <Main>
        <ImageContainer>
          <Image
            fluid={data.fileName.childImageSharp.fluid}
            alt="Low Tide Logo"
          />
        </ImageContainer>
        <article>
          <H1>Low Tide Consulting</H1>
          <Subhead>Est. 2019</Subhead>
          <P>Low Tide was built around Modern JavaScript.</P>

          <P>
            From proof-of-concept prototypes to enterprise applications, I use
            ES6/7/8 JavaScript with Vue (along with its rich ecosystem of
            tooling) and React to build beautiful, performant, well-tested web
            experiences.
          </P>

          <P>
            Unfortunately, this page is still incomplete. Learn more at{" "}
            <StyledA
              href="https://consultlowtide.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              consultlowtide.ca
            </StyledA>
            .
          </P>
        </article>
      </Main>
    </Layout>
  )
}

export default LowTide
