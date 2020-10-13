import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main, H1, P as BaseP, StyledA, StyledLink } from "../components/base"
import { Emoji } from "../components/emoji"

const P = styled(BaseP)`
  color: var(--fontPrimary);
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Main>
      <article>
        <H1>
          404: something went wrong <Emoji label="siren" symbol="🚨" />
        </H1>
        <P>
          There's been an error. We're really sorry! Give me a shout via email
          at <StyledA href="mailto:mlaws@hey.com">mlaws@hey.com</StyledA>, or
          head <StyledLink to="/">home</StyledLink>.
        </P>
      </article>
    </Main>
  </Layout>
)

export default NotFoundPage
