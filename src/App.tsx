import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/AuthContext'
import { ThemeContext } from './contexts/ThemeContext'

import {ThemeSwitcher} from './components'

import { GlobalStyle } from './styles/global'
import {
  Home, NewRoom, Room, AdminRoom
} from './pages'
import { darkTheme, lightTheme } from './styles/themes'

function App() {
  const [theme, setTheme] = useState(localStorage.theme || 'light')
  const [selectedTheme, setSelectedTheme] = useState<DefaultTheme>(lightTheme)

  function switchTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light'
    localStorage.theme = newTheme
    setTheme(newTheme)
  }
  useEffect(() => {
    setSelectedTheme(theme === 'dark' ? darkTheme : lightTheme)
  }, [theme])

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{theme: selectedTheme, switchTheme}}
      >
        <StyledThemeProvider theme={selectedTheme}>
          <ThemeSwitcher isDarkMode={theme === 'dark'} />
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
