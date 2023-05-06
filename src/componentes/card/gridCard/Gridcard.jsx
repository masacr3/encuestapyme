/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import Card from "../Card"
import { v4 } from 'uuid' /*genera id aleatorios*/
import imgAgregar from '../../assets/agregar.png'
import BodyIngreso from "../bodyCard/BodyIngreso"
import { animateScroll as scroll } from 'react-scroll'

function Gridcard({title}) {
    const[cards, setCards] = useState([]) //toda la informacion de las cards la vamos a manejar aca
    const[agregar, setAgregar] = useState(true) //es un servicio que da la gridCard

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
    }

    const guardarCard = (index) =>{
      let newCard = { ...cards[index], resumen: true}
      let resumen = cards.map( card => card.codigo === newCard.codigo ? newCard : card)
      setCards(resumen)

      if ( resumen.filter(card => card.checking).length > 0){
        setAgregar(true)
      }
      else{
        setAgregar(false)
      }

      scroll.scrollToTop()
    }
  
    const crearCard = () =>{
      let code = v4()
      
      let info = {
        codigo : code,
        fecha : "",
        otrafecha : "",
        detalle : "coca",
        monto: "200",
        tipopago : [false, false, false],
        checking : false,
        resumen : false
      }    
      setCards([... cards, info])
      setAgregar(false)
      
      scroll.scrollToBottom()
    }

    const mostrar = (datos) =>{
      console.log(datos)
    }
  
    return (
        <div className="full-w min-vh margin-b-100">
            {agregar  
                &&  
                <div className="down full-w">
                  <img src={imgAgregar} className='bton-absolute margin-b-20 margin-r-30' onClick={e=>crearCard(e)} />
                </div>
              }
            <div className="flex row">
              <button className='margin-b-20' onClick={()=>mostrar(cards)}>MostrarDatos</button>
            </div>
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
                  cancelar={<button className="margin-r-20" onClick={()=>eliminarCard(index)}>Cancelar</button>}
                  guardar={<button onClick={()=>guardarCard(index)}>Guardar</button>}
                  agregarCard={setAgregar}
                 />
                   
              ))
            }
        </div>
  )
}

export default Gridcard