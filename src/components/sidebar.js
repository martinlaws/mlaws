import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useTheme } from "../hooks/theme-context"
import ThemeToggle from "./theme-toggle"
import styled from "styled-components"

const Sidebar = ({ siteTitle }) => {
  const [theme] = useTheme()

  const {
    fontPrimary,
    fontSecondary,
    linkPrimary,
    sidebarBg,
    accentPrimary,
    other,
  } = theme.palette

  const Aside = styled.aside`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    background: ${sidebarBg};
    padding: 2rem;
    font-family: "IBM Plex Sans";
    color: ${fontSecondary};
  `

  const LogoLink = styled(Link)`
    color: ${fontPrimary};
    text-decoration: none;
    font-family: "IBM Plex Mono";
    margin: 0;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    line-height: 1.2em;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

    &:hover {
      color: ${accentPrimary};
      border-color: ${fontSecondary};
    }
  `

  const Nav = styled.nav`
    display: flex;
    flex-flow: column nowrap;
  `

  const NavLink = styled(Link)`
    color: ${linkPrimary};
    font-family: "IBM Plex Sans", serif;
    font-weight: 600;
    font-style: italic;
    text-decoration: none;
    padding-top: 3px;
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    letter-spacing: 0.08em;
    line-height: 1.4em;
    text-transform: uppercase;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

    &:hover {
      color: ${other};
      border-color: ${fontPrimary};
    }
  `

  return (
    <Aside>
      <div>
        {/* <small>{siteDescription}</small> */}
        <h1 style={{ margin: 0 }}>
          <LogoLink to="/" style={{}}>
            {siteTitle}
          </LogoLink>
        </h1>
      </div>
      <Nav>
        <NavLink>Work</NavLink>
        <NavLink>Writing</NavLink>
        <NavLink>Speaking</NavLink>
        <NavLink>Contact</NavLink>
      </Nav>

      <ThemeToggle />
    </Aside>
  )
}

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Sidebar
