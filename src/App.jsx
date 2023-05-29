/* eslint-disable no-unused-vars */
import { HashRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './componentes/routes/AppRouter'



function App() {

  return (
    
    <AuthProvider>
      <HashRouter> 
        <AppRouter />
      </HashRouter>
    </AuthProvider>
    
  )
}

export default App
