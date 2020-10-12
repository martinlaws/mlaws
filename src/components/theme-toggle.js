import React from "react"
import styled from "styled-components"
import { useTheme, themeOptions } from "../hooks/theme-context"

const P = styled.p`
  color: var(--fontSecondary);
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
  transition: border-color 0.2s ease 0s, color 0.2s ease 0s;
  color: var(--fontSecondary);
  border: none;
  letter-spacing: 0.04em;
  line-height: 1.4em;
  background: none;
  padding: 0;

  &:hover,
  &:focus,
  &.currentTheme {
    color: var(--fontPrimary);
    --wght: "wght" 800;
    --slnt: "slnt" -15;
    --casl: "CASL" 1;
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid var(--other);
  }
`

function ThemeToggle() {
  // eslint-disable-next-line no-unused-vars
  const [theme, dispatch] = useTheme()

  const setTheme = newTheme =>
    dispatch({ type: `SET_THEME`, themeName: newTheme })

  const isCurrentTheme = themeName => themeName === theme.name && "currentTheme"

  return (
    <ThemeOptionContainer>
      <P>Themes:</P>
      {themeOptions.map(themeOption => (
        <ThemeOption
          key={themeOption}
          onClick={() => setTheme(themeOption)}
          className={isCurrentTheme(themeOption)}
        >
          {themeOption}
        </ThemeOption>
      ))}
    </ThemeOptionContainer>
  )
}

export default ThemeToggle
