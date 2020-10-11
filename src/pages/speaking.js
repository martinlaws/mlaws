import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main, H1, CTALink } from "../components/base"
import Table from "../components/table"

const site = {
  talks: [
    {
      title: "FITC: Web Unleashed",
      date: "October 2020",
      path: "/speaking/high-tide-low-tide/",
    },
    {
      title: "Tech toolbelt 2020",
      date: "April 2020",
      path: "/speaking/tech-toolbelt-2020/",
    },
    {
      title: "Remote 101: How to facilitate kick-ass remote technical work",
      date: "March 2020",
      path: "/speaking/remote-101/",
    },
    {
      title: "js-next: modern JavaScript made easy",
      date: "February 2020",
      path: "/speaking/js-next/",
    },
    {
      title: "Design Thinking for developers",
      date: "January 2020",
      path: "/speaking/design-thinking-for-developers/",
    },
    {
      title: "Weekly lectures @ Lighthouse Labs",
      date: "January 2016 - present",
      path: "/speaking/high-tide-low-tide/",
    },
  ],
}

const Speaking = () => {
  return (
    <Layout>
      <SEO title="Martin Laws | Speaking | UX Developer" />

      <Main>
        <H1>Selected speaking</H1>

        <Table data={site.talks} />
        <CTALink to="/">Go back to the homepage</CTALink>
      </Main>
    </Layout>
  )
}

export default Speaking
