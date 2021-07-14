import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import {theme} from './styles/theme' 

import { AuthProvider } from './contexts/AuthContext'
import {
  Home, NewRoom, Room, AdminRoom
} from './pages'

function App() { 
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id/" component={AdminRoom} />
          </Switch>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App
