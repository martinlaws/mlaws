import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import ThemeToggle from "./theme-toggle"
import { devices, H1 as DefaultH1, StyledLink as NavLink } from "./base"
import Emoji from "./emoji"

const Aside = styled.aside`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 4rem 1fr 1fr;
  justify-content: space-between;
  background: var(--sidebarBg);
  padding: 2rem;
  color: var(--fontSecondary);
  display: none;
  gap: 2rem;

  &.showSidebarOnMobile {
    display: grid;
    transition: all 0.2s ease;
  }

  @media ${devices.tablet} {
    display: grid;
    grid-template-rows: 10rem 10rem 1fr;
  }
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

const H1 = styled(DefaultH1)`
  margin-bottom: 0;
`

const HamburgerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  padding: 2rem;
  background-color: var(--sidebarBg);
  cursor: pointer;

  max-height: 6rem;

  @media ${devices.tablet} {
    display: none;
  }
`

const Sidebar = ({ siteTitle }) => {
  const [showSidebarOnMobile, setshowSidebarOnMobile] = useState(false)
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "/"
  const isCurrentRoute = routeName => routeName === pathName && "isActive"

  return (
    <>
      <HamburgerMenu
        onClick={() => setshowSidebarOnMobile(!showSidebarOnMobile)}
      >
        <H1 to="/">{siteTitle}</H1>
        <Emoji label="hamburger" symbol="🍔" />
      </HamburgerMenu>
      <Aside className={showSidebarOnMobile && "showSidebarOnMobile"}>
        <div>
          {/* <small>{siteDescription}</small> */}
          <H1 style={{ margin: 0 }}>
            <LogoLink to="/" style={{}}>
              {siteTitle}
            </LogoLink>
          </H1>
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
    </>
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
