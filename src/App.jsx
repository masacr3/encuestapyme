/* eslint-disable no-unused-vars */
import './App.css'
import Logo from './componentes/logo/Logo'
import Gridcard from './componentes/card/gridCard/Gridcard'
import { HashRouter, Routes, Route } from 'react-router-dom'
import IngresosPage from './componentes/layout/IngresosPage'
import EgresosPage from './componentes/layout/EgresosPage'
import { HomePage } from './componentes/layout/HomePage'

function App() {

  return (
    <div className="container-app">
      <HashRouter>
        <Routes>
          <Route path='/ingresos' index element={<IngresosPage/>} />
          <Route path='/egresos' index element={<EgresosPage/>} />
          <Route path='/' index element={<HomePage/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
