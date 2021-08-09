import {createContext} from 'react'
import {DefaultTheme} from 'styled-components'

type ThemeContextType = {
  theme: DefaultTheme
  switchTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)
