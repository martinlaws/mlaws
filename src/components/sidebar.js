import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useTheme } from "../hooks/theme-context"
import styled from "styled-components"

const Sidebar = ({ siteTitle }) => {
  const [theme] = useTheme()

  const Aside = styled.aside`
    background: ${theme.palette.sidebarBg};
    padding: 1.45rem 1.0875rem;
    font-family: "IBM Plex Sans";
    color: ${theme.palette.fontSecondary};
  `

  const LogoLink = styled(Link)`
    color: ${theme.palette.fontPrimary};
    text-decoration: none;
  `

  return (
    <Aside>
      <div>
        <h1 style={{ margin: 0 }}>
          <LogoLink to="/" style={{}}>
            {siteTitle}
          </LogoLink>
        </h1>
        <small>Musings from Martin Laws</small>
      </div>
    </Aside>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
