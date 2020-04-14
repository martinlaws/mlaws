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

  const resetTheme = event => {
    event.preventDefault()

    dispatch({ type: `SET_THEME`, themeName: "synthWave84" })
  }

  const { accentSecondary, accentPrimary, fontSecondary } = theme.palette

  const P = styled.p`
    color: ${fontSecondary};
    font-family: "IBM Plex Sans", sanserif;
    font-style: italic;
    margin-bottom: 0;
  `

  const ThemeOptionContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  `

  const ThemeOption = styled.button`
    cursor: pointer;
    font-family: "IBM Plex Mono", monospaced;
    transition: border-color 0.2s ease 0s, color 0.2s ease 0s;
    color: ${accentPrimary};
    border-style: solid;
    border-width: 0px 0px 2px;
    border-color: transparent;
    letter-spacing: 0.04em;
    line-height: 1.4em;
    background: none;
    padding: 0;

    &:hover {
      color: ${accentSecondary};
      border-color: ${fontSecondary};
    }
  `

  return (
    <ThemeOptionContainer>
      <P>Themes:</P>
      <ThemeOption onClick={toggleTheme}>[Dark]</ThemeOption>
      <ThemeOption onClick={toggleTheme}>[Light]</ThemeOption>
      <ThemeOption onClick={resetTheme}>[SynthWave '84]</ThemeOption>
    </ThemeOptionContainer>
  )
}

export default ThemeToggle
