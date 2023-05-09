/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {ContainerCard, ContainerResumen, ContainerBton, Titulo, TextResumen, Imagen, Noscroll} from './Card.module.css'
import Lapiz from '../assets/lapiz.png'
import { useEffect, useState } from 'react'
import Modal from '../modal/Modal'


function Card({title, body, cancelar=null, guardar=null, resumen, cards, updateCards, agregarCard, index}) {
  
  const[position, setPosition] = useState(window.scrollY)

  const editarCard = () => {
    let resumen = { ...cards[index], resumen:false}
    let newCard = cards.map(card => card.codigo === resumen.codigo ? resumen : {...card, resumen: true})
    setPosition(window.scrollY)
    updateCards(newCard)
    agregarCard(false)
  }
  
  return (
    <>
      { resumen && 
        <div className={ContainerResumen} data-id={cards[index].codigo} >
             <div className={TextResumen}>{cards[index].fecha}</div>
             <div className={TextResumen}>{cards[index].detalle}</div>
             <div className={TextResumen}>${cards[index].monto}</div>
             <img src={Lapiz} className={Imagen} onClick={() => editarCard()}/>
        </div>

      }
      {
        !resumen &&
        <Modal>
          <div className={ContainerCard} data-id={cards[index].codigo}>
            <div className={Titulo}>{title}</div>
              { body }
              { cancelar &&
                  <div className={ContainerBton}>
                 { cancelar }
                 { guardar && cards[index].checking &&  guardar}
                </div>
              }
          </div>
        </Modal>
      }
    </>
  )
}

export default Card