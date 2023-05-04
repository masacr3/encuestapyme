/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react'

const gridContext = React.createContext()
const gridToggleContext = React.createContext()

export function useGridContext(){
    return useContext(gridContext)
}

export function useGridToggleContext(){
    return useContext(gridToggleContext)
}

export function Gridprovider({children}) {
  const [data, setData] = useState([])

  const cambiarData = (id, fecha, detalle, monto) =>{
    setData([...data, {
        id : id,
        fecha : fecha,
        detalle : detalle,
        monto : monto
    }])
  }

  return (
    <gridContext.Provider value={data}>
        <gridToggleContext.Provider value={cambiarData}>
            {children}
        </gridToggleContext.Provider>
    </gridContext.Provider>
  )
}
