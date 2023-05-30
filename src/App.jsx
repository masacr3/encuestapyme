/* eslint-disable no-unused-vars */
import { AuthProvider } from './auth/context/AuthProvider'
import { AppRouter } from './componentes/routes/AppRouter'



function App() {

  return (
    
    <AuthProvider>

        <AppRouter />
      
    </AuthProvider>
    
  )
}

export default App
