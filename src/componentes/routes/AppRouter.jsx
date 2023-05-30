import '../../App.css'
import { Routes, Route, HashRouter } from 'react-router-dom'
import { LayoutRoutes } from '../layout/LayoutRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { LoginPage } from '../../auth/pages/LoginPage'

export const AppRouter = () => {
  return (
    <div className="container-app">
      <HashRouter>
        <Routes>

          <Route path="/login" element={
            <PublicRoute>
              
                    <LoginPage />
              
            </PublicRoute>
          }/>




          <Route path="/*" element={
            <PrivateRoute>
                <LayoutRoutes/>
            </PrivateRoute>
            } />
          
          
          </Routes>
          </HashRouter>
    </div>
  )
}
