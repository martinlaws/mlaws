import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main, H1, P, CTALink } from "../components/base"
import Img from "../components/image"
import { Emoji } from "../components/emoji"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "maya.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Image = () => {
  const data = useStaticQuery(query)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const ImageContainer = styled.div`
  max-width: 600px;
`

const Maya = () => (
  <Layout>
    <SEO title="Maya D'Amico-Laws | UX Doggo" />
    <Main>
      <H1>
        Henlo! I'm Maya <Emoji label="paw" symbol="🦮" />
      </H1>
      <P>
        I am a woman on a mission: maximum comfort. I have a couple of
        two-leggeds on staff, Martin and Danielle, who tend to me 24/7. I can
        usually be found sleeping, snoofing, and generally living like royalty.
        My life was not always so easy, before my hoomans found me at the
        Toronto Humane Society, I had a bit of a "run-in" with a motor
        vehicle... leading to the loss of all of my front teef(sp?). As a
        result, my tongue hangs free as the wind it whistles in. Thanks for
        reading!
      </P>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <CTALink to="/">Go back to the homepage</CTALink>
    </Main>
  </Layout>
)

export default Maya
