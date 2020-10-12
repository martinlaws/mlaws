import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import ThemeToggle from "./theme-toggle"
import { StyledLink as NavLink } from "./base"

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

const Sidebar = ({ siteTitle }) => {
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "/"
  const isCurrentRoute = routeName => routeName === pathName && "isActive"

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
        <NavLink className={isCurrentRoute("/")} to="/">
          Martin Who?
        </NavLink>
        <NavLink className={isCurrentRoute("/work/")} to="/work/">
          Work
        </NavLink>
        <NavLink className={isCurrentRoute("/writing/")} to="/writing/">
          Writing
        </NavLink>
        <NavLink className={isCurrentRoute("/speaking/")} to="/speaking/">
          Speaking
        </NavLink>
        <NavLink className={isCurrentRoute("/contact/")} to="/contact/">
          Contact
        </NavLink>
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
