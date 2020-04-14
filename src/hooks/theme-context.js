import React from "react"

const ThemeStateContext = React.createContext()
const ThemeDispatchContext = React.createContext()

// const [theme, setTheme] = useState("light")

export const palettes = {
  dark: {
    sidebarBg: `rgb(52, 52, 52)`,
    contentBg: `rgb(25, 25, 25)`,
    fontPrimary: `rgb(237, 237, 237)`,
    fontSecondary: `rgb(158, 158, 158)`,
    linkPrimary: `rgb(255, 255, 255)`,
  },
  light: {
    sidebarBg: `rgb(255, 255, 255)`,
    contentBg: `rgb(211, 211, 211)`,
    fontPrimary: `rgb(52, 52, 52)`,
    fontSecondary: `rgb(105, 105, 105)`,
    linkPrimary: `rgb(52, 52, 52)`,
  },
  synthWave84: {
    sidebarBg: `#241b2f`,
    contentBg: `#262335`,
    fontPrimary: `#36f9f6`,
    fontSecondary: `#ff7edb`,
    linkPrimary: `#fede5d`,
  },
}

// const palette = theme === "light" ? lightPalette : darkPalette

function themeReducer(state, action) {
  if (action.type === `SET_THEME`) {
    return { name: action.themeName, palette: palettes[action.themeName] }
  }

  throw new Error(`Unahndled action type: ${action.type}`)
}

function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(themeReducer, {
    themeName: "synthWave84",
    palette: palettes.synthWave84,
  })

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

function useThemeState() {
  const context = React.useContext(ThemeStateContext)

  if (context === undefined)
    throw new Error("useThemeState must be used within a ThemeProvider")

  return context
}

function useThemeDispatch() {
  const context = React.useContext(ThemeDispatchContext)

  if (context === undefined)
    throw new Error("useThemeDispatch must be used within a ThemeProvider")

  return context
}

function useTheme() {
  return [useThemeState(), useThemeDispatch()]
}

export { ThemeProvider, useTheme }
