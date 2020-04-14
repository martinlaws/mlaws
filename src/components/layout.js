/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import { ThemeProvider } from "../hooks/theme-context"
import TwoColumnLayout from "./two-column-layout"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div
        style={{
          display: `flex`,
          flexFlow: `row nowrap`,
        }}
      >
        <TwoColumnLayout>{children}</TwoColumnLayout>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
