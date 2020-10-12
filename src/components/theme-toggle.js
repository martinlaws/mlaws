import React from "react"
import styled from "styled-components"
import { useTheme, themeOptions } from "../hooks/theme-context"
import { NavSectionHeading } from "./base"

const ThemeOptionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-end;
`

const ThemeOption = styled.button`
  cursor: pointer;
  transition: all 0.1s ease-in-out 0s;
  color: var(--fontSecondary);
  border: none;
  background: none;
  padding: 0;
  text-decoration: underline;

  &:hover,
  &:focus,
  &.currentTheme {
    color: var(--fontPrimary);
    --wght: "wght" 800;
    --slnt: "slnt" -15;
    --casl: "CASL" 1;
    text-decoration: none;
  }

  &.currentTheme::before {
    content: "🎨";
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
      <NavSectionHeading>Themes</NavSectionHeading>
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
