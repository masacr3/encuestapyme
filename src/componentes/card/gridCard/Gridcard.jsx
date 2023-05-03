/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Card from "../Card"
import { v4 } from 'uuid' /*genera id aleatorios*/
import BodyIngreso from "../bodyCard/BodyIngreso"

function Gridcard({title}) {
    const[cards, setCards] = useState([])

    const eliminar = (targetDelete) =>{
      let quitar = cards.filter(code => code !== targetDelete)
      setCards([...quitar])
    }
  
    const agregarCard = e =>{
      let info = {
        codigo : v4(),
        fecha : "",
        
      }    
      setCards([... cards, v4()])
    }
  
    return (
        <>
            <button className='margin-b-20' onClick={e=>agregarCard(e)}>Agregar</button>
            { cards.length > 0 && cards.map( code => (
                <Card title={title} key={code} id={code} kill={true} >
                    <BodyIngreso />  
                    <button onClick={e=>eliminar(code)}>Cancelar</button>
                </Card>
            ))
            }
        </>
  )
}

export default Gridcard