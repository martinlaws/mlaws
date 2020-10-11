import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import { Main, H1, CTALink } from "../components/base"

const site = {
  articles: [
    {
      title: "Low Tide, High Tide",
      date: "April 2020",
      path: "/writing/low-tide-high-tide/",
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

const Writing = () => {
  return (
    <Layout>
      <SEO title="Martin Laws | Writing | UX Developer" />
      <Main>
        <H1>Selected writing</H1>

        <Table data={site.articles} />
        <CTALink to="/">Go back to the homepage</CTALink>
      </Main>
    </Layout>
  )
}

export default Writing
