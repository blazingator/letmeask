import {useContext} from 'react'
import {Button} from '../Button'

import {ThemeContext} from '../../contexts/ThemeContext'

export function ThemeSwitcher(){
  const {switchTheme} = useContext(ThemeContext)

  return (
    <Button
      onClick={switchTheme}
    >
      Toggle Theme
    </Button>
  )
}
