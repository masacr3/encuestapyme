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
    const[colapsar, setColapsar] = useState([false])

    const eliminar = (targetDelete, i) =>{
      let quitar = cards.filter(code => code !== targetDelete)
      let quitarData = data.filter(item => item.codigo!== targetDelete)
      let quitarCheck = checking.filter((item,index)=> index !== i)
      let quitarColapsar = colapsar.filter((item,index) => index !== i)
      setChecking(quitarCheck)
      setCards(quitar)
      setData(quitarData)
      setColapsar(quitarColapsar)
      setAgregar(true)
    }

    const guardar = (id, index) =>{
      setAgregar(true)
      let newColapsar = colapsar.map((item,i)=> i === index ? true : item)
      setColapsar(newColapsar)
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
      setColapsar([...colapsar, false])
    }

    const mostrar = (datos) =>{
      console.log(datos)
    }
  
    return (
        <>
            <div className="flex row">
              {agregar  && 
                ( checking.length === 0 || checking.filter(item => item).length > 0 ) && 
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
                      data={data[index]}
                      key={code} 
                      id={code}
                      index={index} 
                      kill={<button className="margin-r-20" onClick={()=>eliminar(code,index)}>Cancelar</button>}
                      guardar={<button onClick={()=>guardar(code, index)}>Finalizar</button>} 
                      checkdatos={checking[index]} 
                      colapsar={colapsar}
                      updatecolapsar={setColapsar}
                      agregar={setAgregar}
                 />  
              ))
            }
        </>
  )
}

export default Gridcard