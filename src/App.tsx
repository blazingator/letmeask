import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/AuthContext'
import { ThemeContext } from './contexts/ThemeContext'

import {ThemeSwitcher} from './components'

import { GlobalStyle } from './styles/global'
import {
  Home, NewRoom, Room, AdminRoom
} from './pages'
import { useState } from 'react'
import { darkTheme, lightTheme } from './styles/themes'

function App() {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme)

  const switchTheme = () => theme.name === 'light' ? setTheme(darkTheme) 
    : setTheme(lightTheme)

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{theme, switchTheme}}
      >
        <StyledThemeProvider theme={theme}>
          <ThemeSwitcher isDarkMode={theme.name === 'dark'} />
          <AuthProvider>
            <GlobalStyle />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
              <Route path="/rooms/:id" component={Room} />
              <Route path="/admin/rooms/:id/" component={AdminRoom} />
            </Switch>
          </AuthProvider>
        </StyledThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App
