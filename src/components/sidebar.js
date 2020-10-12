import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ThemeToggle from "./theme-toggle"
import styled from "styled-components"

const Aside = styled.aside`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background: var(--sidebarBg);
  padding: 2rem;
  color: var(--fontSecondary);
`

const LogoLink = styled(Link)`
  color: var(--fontPrimary);
  text-decoration: none;
  margin: 0;
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  line-height: 1.2em;
  transition: border-color 0.2s ease 0s, color 0.2s ease 0s;

  &:hover {
    color: var(--accentPrimary);
    border-color: var(--fontSecondary);
  }
`

const Nav = styled.nav`
  display: flex;
  flex-flow: column nowrap;
`

const NavLink = styled(Link)`
  color: var(--linkPrimary);
  --wght: "wght" 800;
  --casl: "CASL" 1;
  text-decoration: none;
  padding-top: 3px;
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  letter-spacing: 0.08em;
  line-height: 1.4em;
  text-transform: uppercase;
  transition: border-color 0.2s ease 0s, color 0.2s ease 0s;
  width: max-content;

  &:hover {
    background-color: var(--fontSecondary);
    color: var(--sidebarBg);
    border-color: var(--fontPrimary);
  }
`

const Sidebar = ({ siteTitle }) => {
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
        <NavLink to="/work/">Work</NavLink>
        <NavLink to="/writing/">Writing</NavLink>
        <NavLink to="/speaking/">Speaking</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
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
