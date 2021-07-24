import { ButtonHTMLAttributes } from 'react'
import { Moon, Sun } from 'react-feather'

import { useTheme } from '../../hooks/useTheme'

import { ThemeButton } from './styles'

type ThemeSwitcherProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isDarkMode: boolean
}

export function ThemeSwitcher({isDarkMode = false, ...props}: ThemeSwitcherProps){
  const {switchTheme, theme} = useTheme()

  return (
    <ThemeButton
      onClick={switchTheme}
      {...props}
    >
      {isDarkMode 
        ? (
            <Sun
              color={theme.fg}
              fill={theme.fg}
              size={25}
            />
          )
        : (
            <Moon
              color={theme.fg}
              fill={theme.fg}
              size={25}
            />
          )
      }
    </ThemeButton>
  )
}
