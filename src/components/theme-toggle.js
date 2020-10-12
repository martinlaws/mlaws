import React from "react"
import styled from "styled-components"
import { useTheme } from "../hooks/theme-context"

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
  color: var(--accentPrimary);
  border-style: solid;
  border-width: 0px 0px 2px;
  border-color: transparent;
  letter-spacing: 0.04em;
  line-height: 1.4em;
  background: none;
  padding: 0;

  &:hover {
    background-color: var(--accentSecondary);
    border-color: var(--fontSecondary);
  }
`

const themeOptions = ["dark", "light", "synthWave84"]

function ThemeToggle() {
  // eslint-disable-next-line no-unused-vars
  const [theme, dispatch] = useTheme()

  const setTheme = newTheme =>
    dispatch({ type: `SET_THEME`, themeName: newTheme })

  return (
    <ThemeOptionContainer>
      <P>Themes:</P>
      {themeOptions.map(themeOption => (
        <ThemeOption key={themeOption} onClick={() => setTheme(themeOption)}>
          {themeOption}
        </ThemeOption>
      ))}
    </ThemeOptionContainer>
  )
}

export default ThemeToggle
