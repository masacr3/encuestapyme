/* eslint-disable no-unused-vars */
import './App.css'
import Logo from './componentes/logo/Logo'
import Gridcard from './componentes/card/gridCard/Gridcard'
import { useState } from 'react'
import Card from './componentes/card/Card'
import BodyIngreso from './componentes/card/bodyCard/BodyIngreso'
import { Gridprovider } from './componentes/gridprovider/Gridprovider'

function App() {

  return (
    <div className="container-app">
      <Logo />
      <Gridcard title={"Ingresos"}/>
    </div>
  )
}

export default App
