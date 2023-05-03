/* eslint-disable no-unused-vars */
import './App.css'
import Logo from './componentes/logo/Logo'
import Gridcard from './componentes/card/gridCard/Gridcard'
import { useState } from 'react'
import Card from './componentes/card/Card'
import BodyIngreso from './componentes/card/bodyCard/BodyIngreso'

function App() {

  return (
    <div className="container-app">
      <Logo />
      <Gridcard title={"Ingresos"} cardkill={true} bodycard={<BodyIngreso/>}/>
    </div>
  )
}

export default App
