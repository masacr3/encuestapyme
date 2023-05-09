/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import {ContainerGrid,ContainerBtonFlotante, BtonFlotante, BtonAgregar,BtonEliminar, TitleGrid, TitleGridTitle, TitleGridEliminar, NoData, NoScroll} from './Gridcard.module.css'
import Card from "../Card"
import { v4 } from 'uuid' /*genera id aleatorios*/
import imgAgregar from '../../assets/agregar.png'
import BodyIngreso from "../bodyCard/BodyIngreso"
import { animateScroll as scroll } from 'react-scroll'

function Gridcard({title}) {
    const[cards, setCards] = useState([]) //toda la informacion de las cards la vamos a manejar aca
    const[agregar, setAgregar] = useState(true) //es un servicio que da la gridCard

    useEffect(() => {
      const items = JSON.parse(localStorage.getItem('data-ingreso'));
      if (items) {
       setCards(items);
      }
    }, []);

    const eliminarCard = (index) =>{
      let quitarCard = cards.filter(card => card.codigo !== cards[index].codigo )
      setCards(quitarCard)

      //pregunta si hay alguna otra targenta por editar
      if ( quitarCard.length == 0 || quitarCard.filter(card => card.checking).length > 0){
        setAgregar(true)
      }
      else{
        setAgregar(false)
      }

      document.body.style.overflowY = "auto"
    }

    const guardarCard = (index) =>{
      let newCard = { ...cards[index], resumen: true}
      let resumen = cards.map( card => card.codigo === newCard.codigo ? newCard : card)
      setCards(resumen)
      guardarDatos(resumen)

      if ( resumen.filter(card => card.checking).length > 0){
        setAgregar(true)
      }
      else{
        setAgregar(false)
      }

      scroll.scrollToBottom()
      document.body.style.overflowY = "auto"
    }
  
    const crearCard = () =>{
      let code = v4()
      
      let info = {
        codigo : code,
        fecha : "",
        otrafecha : "",
        detalle : "",
        monto: "",
        tipopago : [false, false, false],
        checking : false,
        resumen : false
      }    
      setCards([... cards, info])
      setAgregar(false)
      
      scroll.scrollToBottom()
      document.body.style.overflowY = "hidden"
    }

    function guardarDatos(datos){
      localStorage.setItem('data-ingreso', JSON.stringify(datos))

      let datosGuardados = JSON.parse(localStorage.getItem('data-ingreso'))
      console.log("Esta data se guardo",datosGuardados)
    }

    function eliminarDatos(){
      localStorage.clear()
      setCards([])
    }

    return (
        <div className={ContainerBtonFlotante}>
            {agregar  
                &&  
                <div className={BtonFlotante}>
                  <img src={imgAgregar} className={BtonAgregar} onClick={e=>crearCard(e)} />
                </div>
              }
            
            { cards.length > 0 &&
              <div className={TitleGrid}>
                <p className={TitleGridTitle}>Items</p>
                <button className={TitleGridEliminar} onClick={eliminarDatos}>Eliminar datos</button>
              </div>
            }            
            <div className={ContainerGrid}>
                { cards.length === 0 && <p className={NoData}>Sin datos</p>}
                { cards.length > 0 && cards.map( (card, index) => (
                    <Card 
                      title={title}
                      key={index} 
                      body={<BodyIngreso 
                                  index={index}
                                  cards={cards}
                                  updateCards={setCards}
                            />}
                      index={index}
                      resumen={card.resumen}
                      cards={cards}
                      updateCards={setCards}
                      cancelar={<button className={BtonEliminar} onClick={()=>eliminarCard(index)}>Cancelar</button>}
                      guardar={<button onClick={()=>guardarCard(index)}>Guardar</button>}
                      agregarCard={setAgregar}
                    />
                      
                  ))
                }
             </div>
        </div>
  )
}

export default Gridcard