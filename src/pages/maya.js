import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main, H1 as BaseH1, StyledA } from "../components/base"
import { Emoji } from "../components/emoji"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  query {
    fileName: file(relativePath: { eq: "maya.jpg" }) {
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

const Maya = () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <SEO
        title="Maya B. D'Amico-Laws // UX doggo"
        description="Maya B. D'Amico-Laws // @mayanoteef on instagram"
      />
      <Main>
        <ImageContainer>
          <Image
            fluid={data.fileName.childImageSharp.fluid}
            alt="Pixel art version of Martin's headshot"
          />
        </ImageContainer>
        <article>
          <H1>
            Henlo! I'm Maya <Emoji label="paw" symbol="🐾" />
          </H1>
          <Subhead>
            better known as{" "}
            <StyledA
              href="https://instagram.com/mayanoteef"
              target="_blank"
              rel="noreferrer noopener"
            >
              @mayanoteef
            </StyledA>{" "}
            on instagram.
          </Subhead>
          <P>
            I am a woman on a mission: maximum comfort. I have a couple of
            two-leggeds on staff, Martin and Danielle, who tend to me 24/7. I
            can usually be found sleeping, snoofing, and generally living like
            royalty. My life was not always so easy, before my hoomans found me
            at the Toronto Humane Society, I had a bit of a "run-in" with a
            motor vehicle... leading to the loss of all of my front teef(sp?).
            As a result, my tongue hangs free as the wind it whistles in. Thanks
            for reading!
          </P>
        </article>
      </Main>
    </Layout>
  )
}

export default Maya
