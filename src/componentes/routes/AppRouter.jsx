import '../../App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { LayoutRoutes } from '../layout/LayoutRoutes'

export const AppRouter = () => {
  return (
    <div className="container-app">
      <HashRouter>
        <Routes>
        <Route path="/*" element={ <LayoutRoutes />} />
        </Routes>
      </HashRouter>
    </div>
  )
}
