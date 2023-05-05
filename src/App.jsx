/* eslint-disable no-unused-vars */
import './App.css'
import Logo from './componentes/logo/Logo'
import Gridcard from './componentes/card/gridCard/Gridcard'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './componentes/layout/Layout'

function App() {

  return (
    <div className="container-app">
      <HashRouter>
        <Routes>
          <Route path='/' index element={<Layout/>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
