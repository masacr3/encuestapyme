/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Card from "../Card"
import { v4 } from 'uuid' /*genera id aleatorios*/
import BodyIngreso from "../bodyCard/BodyIngreso"

function Gridcard({title}) {
    const[cards, setCards] = useState([])
    const[data, setData] = useState([])
    const[checking, setChecking] = useState([])
    const[agregar, setAgregar] = useState(true)

    const eliminar = (targetDelete) =>{
      let quitar = cards.filter(code => code !== targetDelete)
      let quitarData = data.filter(item => item.codigo!== targetDelete)
      setCards(quitar)
      setData(quitarData)
      setAgregar(true)
    }

    const guardar = (id) =>{
      setAgregar(true)
    }
  
    const agregarCard = () =>{
      let code = v4()
      
      let info = {
        codigo : code,
        fecha : "",
        otrafecha : "",
        detalle : "",
        monto: "",
        tipopago : [false, false, false]
      }    
      setData([...data, info])
      setCards([... cards, code])
      setChecking([...checking, false])
      setAgregar(false)
    }

    const mostrar = (datos) =>{
      console.log(datos)
    }
  
    return (
        <>
            <div className="flex row">
              {agregar && 
                <button className='margin-b-20 margin-r-10' onClick={e=>agregarCard(e)}>Agregar</button>
              }
              <button className='margin-b-20' onClick={()=>mostrar(data)}>MostrarDatos</button>
            </div>
            { cards.length > 0 && cards.map( (code, index) => (
                <Card title={title} 
                      body={<BodyIngreso 
                              id={code} 
                              datos={data} 
                              update={setData} 
                              indexCheck={index} 
                              check={checking} 
                              updateCheck={setChecking}
                            />}
                      key={code} 
                      id={code} 
                      kill={<button className="margin-r-20" onClick={()=>eliminar(code)}>Cancelar</button>}
                      guardar={<button onClick={()=>guardar(code)}>Finalizar</button>} 
                      checkdatos={checking[index]} 
                 />  
              ))
            }
        </>
  )
}

export default Gridcard