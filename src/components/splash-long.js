import React from "react"
import styled from "styled-components"
import { Emoji } from "./emoji"
import { Main, H1 as BaseH1, StyledA, StyledLink } from "./base"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { social } from "../utilities/constants"

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
  margin-bottom: 1.5rem;
  --mono: "MONO" 0;
  --casl: "CASL" 0;
  --wght: "wght" 400;
  --slnt: "slnt" 0;
  --CRSV: "CRSV" 0.5;
`

const H1 = styled(BaseH1)`
  margin-bottom: 0.5rem;
`

const BioSection = styled.div`
  margin: 2rem 0;

  p {
    margin-bottom: 0.25rem;
  }
`

const Ital = styled.span`
  --slnt: "slnt" -15;
  --casl: "CASL" 1;
  --wght: "wght" 200;
  letter-spacing: 0.05em;
`

function SplashLong() {
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
            <P>
              You want the <Ital>long</Ital> bio?
            </P>
            <H1>
              Grab a coffee <Emoji symbol="☕️" label="waving hand" />
            </H1>
          </BioSection>
          <P>
            I'm a design thinker, front-end developer,{" "}
            <StyledLink to="/maya">dog father</StyledLink>, coffee snob, LEGO
            enthusiast, and fantasy{" "}
            <StyledA
              href="https://www.fantasysurvivorgame.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Survivor
              <Emoji symbol="™" label="Trademark symbol" />
            </StyledA>{" "}
            player.
          </P>
          <P>
            Most of my days are spent building things in browsers for humans. I
            work as a Senior UX Developer at{" "}
            <StyledA
              href="https://www.shopify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shopify
            </StyledA>{" "}
            on the Ecosystem team. You can spot me in the wild at{" "}
            <StyledA
              href="https://www.shopify.com/partners"
              target="_blank"
              rel="noopener noreferrer"
            >
              shopify.com/partners
            </StyledA>
            .
          </P>
          <P>
            Previously, I founded{" "}
            <StyledA
              href="https://consultlowtide.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Low Tide Consulting
            </StyledA>{" "}
            - where I had the pleasure of working with clients including{" "}
            <StyledA
              href="https://globeandmail.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Globe and Mail
            </StyledA>
            ,{" "}
            <StyledA
              href="https://votecompass.cbc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vote Compass (Vox Pop Labs)
            </StyledA>
            , and some of my favourite{" "}
            <StyledA
              href="https://orx.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canadian startups
            </StyledA>
            . For more on where I worked prior to Low Tide, have a look at my{" "}
            <StyledA
              href={
                social.find(socialItem => socialItem.title === "linkedin").path
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn profile
            </StyledA>
            .
          </P>
          <P>
            I <StyledLink to="/speaking/">present regularly</StyledLink> on UX
            Development and Design Thinking and have taught hundreds of students
            at{" "}
            <StyledA
              href="https://www.lighthouselabs.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lighthouse Labs
            </StyledA>{" "}
            since 2016.
          </P>

          <P>
            I am active on{" "}
            <StyledA
              href="https://www.twitter.com/martinblaws/"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </StyledA>{" "}
            and{" "}
            <StyledA
              href="https://www.instagram.com/martinblaws/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </StyledA>{" "}
            but can most reliably be reached by email at{" "}
            <StyledA href="mailto:mlaws@hey.com">mlaws@hey.com</StyledA>.
          </P>
        </article>
      </Main>
    </>
  )
}

export default SplashLong

// Well hello there! My name is Cassidy and I'm a Principal Developer Experience Engineer at Netlify. Before now, I worked at React Training, CodePen, Amazon, L4 Digital, Clarifai, and Venmo, and graduated from Iowa State University.

// I run a weekly newsletter and love teaching and helping people become better coders! In my spare time, I love playing music, building mechanical keyboards and LEGO sets, and hanging out with my sister Cami. We also like to make cool things with our laser cutter and 3D printer, and have a little Etsy shop if you want to check it out! I also have a Patreon if you'd like to chat with me regularly (our Discord group is so active I can hardly keep up, come join in the fun!), get resume reviews, schedule mock interviews with me, or get a few coupons and gifts from me on occasion. No pressure to join in, and I appreciate your support a ton no matter what!

// In terms of where I am on the internet (and off), you might have seen me in Glamour Magazine or the Big Dream documentary a few years back, or more recently you might have seen my Scrabble keyboard project in a couple dozen different publications! I also made a successfully funded Kickstarter project called Go: On the Go! to get people interested in playing the game go. I've spoken at over a hundred events around the world, and have made online classes on Udemy, Skillshare, and moooore. I'll (likely) happily speak at your event or podcast, or do influencer work for your org. I have a speaker rider, if you'd like to talk to me about your event. Feel free to email me with details!

// Alright, since you've read this far, have a joke: Why are mountains so funny? Because they're hill areas.
