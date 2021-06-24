import { BrowserRouter, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import { Home, NewRoom } from './pages'

function App() {
 
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthProvider>  
  </BrowserRouter>
  );
}

export default App
