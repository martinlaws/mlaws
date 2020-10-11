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
import styled from "styled-components"

const FlexContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
  `

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <FlexContainer>
        <TwoColumnLayout>{children}</TwoColumnLayout>
      </FlexContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
