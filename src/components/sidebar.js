import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import ThemeToggle from "./theme-toggle"
import {
  devices,
  H1 as DefaultH1,
  StyledLink,
  StyledA as BaseStyledA,
  NavSectionHeading,
} from "./base"
import { Emoji } from "./emoji"
import { navItems, social as socialItems } from "../utilities/constants"

const Aside = styled.aside`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content;
  height: max-content;
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
    grid-row: span 2;
    display: grid;
    grid-template-rows: 6rem 1fr 1fr max-content;
    min-height: 100%;
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
  display: none;

  @media ${devices.tablet} {
    display: block;
  }
`

const NavLink = styled(StyledLink)`
  &:hover,
  &:focus {
    color: var(--fontPrimary);
  }
  &.isActive::before {
    content: "📍";
  }
`

const StyledA = styled(BaseStyledA)`
  &:hover,
  &:focus {
    color: var(--fontPrimary);
  }
  &.isActive::before {
    content: "📍";
  }
`

const HamburgerMenu = styled.div`
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2.5rem;
  padding: 1rem;
  background-color: var(--sidebarBg);

  max-height: 6rem;

  @media ${devices.tablet} {
    display: none;
  }
`

const HelpText = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
`

const Button = styled.button`
  height: 100%;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: var(--fontSecondary);
  --casl: "CASL" 1;
  --wght: "wght" 400;
  outline: 3px solid var(--other);

  & .helpText {
    text-decoration: underline;
  }

  &:hover {
    color: var(--fontPrimary);
    --slnt: "slnt" -15;
    --wght: "wght" 800;

    & .helpText {
      text-decoration: none;
    }
  }

  &:focus {
    outline: 3px solid var(--other);
  }
`

const Sidebar = ({ siteTitle }) => {
  const [showSidebarOnMobile, setshowSidebarOnMobile] = useState(false)
  const pathName =
    typeof window !== "undefined" ? window.location.pathname : "/"
  const isCurrentRoute = routeName => routeName === pathName && "isActive"

  return (
    <>
      <HamburgerMenu>
        <Button onClick={() => setshowSidebarOnMobile(!showSidebarOnMobile)}>
          <HelpText className="helpText">{"hamburger menu →"}</HelpText>
          <Emoji label="hamburger" symbol="🍔" />
        </Button>
      </HamburgerMenu>
      <Aside className={showSidebarOnMobile && "showSidebarOnMobile"}>
        <H1>
          <LogoLink to="/">{siteTitle}</LogoLink>
        </H1>
        <Nav>
          <NavSectionHeading>Pages</NavSectionHeading>
          {navItems.map((navItem, index) => (
            <NavLink
              key={index}
              className={isCurrentRoute(navItem.path)}
              to={navItem.path}
            >
              {navItem.label}
            </NavLink>
          ))}
        </Nav>
        <Nav>
          <NavSectionHeading>Social</NavSectionHeading>
          {socialItems.map((socialItem, index) => (
            <StyledA
              key={index}
              href={socialItem.path}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={socialItem.title}
            >
              {socialItem.title}
            </StyledA>
          ))}
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
