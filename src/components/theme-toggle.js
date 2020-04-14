import React from "react"
import styled from "styled-components"

import { useTheme } from "../hooks/theme-context"

function ThemeToggle() {
  const [theme, dispatch] = useTheme()

  const toggleTheme = event => {
    event.preventDefault()

    const newTheme = theme.name === "dark" ? "light" : "dark"

    console.log(newTheme)

    dispatch({ type: `SET_THEME`, themeName: newTheme })
  }

  const { accentSecondary, accentPrimary, fontSecondary } = theme.palette

  const IconButton = styled.div`
    cursor: pointer;
    font-family: "IBM Plex Mono", monospaced;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;
    color: ${accentPrimary};
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    letter-spacing: 0.04em;
    line-height: 1.4em;

    &:hover {
      color: ${accentSecondary};
      border-color: ${fontSecondary};
    }
  `

  return (
    <div>
      <IconButton onClick={toggleTheme}>{"[Random Theme]"}</IconButton>
      <IconButton onClick={toggleTheme}>{"[Customize Theme]"}</IconButton>
    </div>
  )
}

export default ThemeToggle
