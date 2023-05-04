/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Card from "../Card"
import { v4 } from 'uuid' /*genera id aleatorios*/
import BodyIngreso from "../bodyCard/BodyIngreso"

function Gridcard({title}) {
    const[cards, setCards] = useState([])
    const[data, setData] = useState([])

    const eliminar = (targetDelete) =>{
      let quitar = cards.filter(code => code !== targetDelete)
      let quitarData = data.filter(item => item.codigo!== targetDelete)
      setCards(quitar)
      setData(quitarData)
    }
  
    const agregarCard = () =>{
      let code = v4()
      
      let info = {
        codigo : code,
        fecha : "",
        detalle : "",
        monto: ""
      }    
      setData([...data, info])
      setCards([... cards, code])
    }

    const mostrar = (datos) =>{
      console.log(datos)
    }
  
    return (
        <>
            <div className="flex row">
              <button className='margin-b-20 margin-r-10' onClick={e=>agregarCard(e)}>Agregar</button>
              <button className='margin-b-20' onClick={()=>mostrar(data)}>MostrarDatos</button>
            </div>
            { cards.length > 0 && cards.map( code => (
                <Card title={title} key={code} id={code} kill={true} >
                    <BodyIngreso id={code} datos={data} update={setData}/>  
                    <button onClick={()=>eliminar(code)}>Cancelar</button>
                </Card>
            ))
            }
        </>
  )
}

export default Gridcard