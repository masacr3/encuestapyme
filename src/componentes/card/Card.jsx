/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Card.css'
import Lapiz from '../assets/lapiz.png'


function Card({title, body, cancelar=null, guardar=null, resumen, cards, updateCards, agregarCard, index}) {
  
  const editarCard = () => {
    let resumen = { ...cards[index], resumen:false}
    let newCard = cards.map(card => card.codigo === resumen.codigo ? resumen : {...card, resumen: true})
    updateCards(newCard)
    agregarCard(false)
  }
  
  return (
    <>
      { resumen && 
        <div className="container row box card-colapsed" data-id={cards[index].codigo} >
             <div className='margin-r-20 text-resumen'>{cards[index].fecha}</div>
             <div className='text-resumen'>{cards[index].detalle}</div>
             <div className='text-resumen'>${cards[index].monto}</div>
             <img src={Lapiz} className='editar-img' onClick={() => editarCard()}/>
        </div>

      }
      {
        !resumen &&
          <div className="container flex col padding-h box flex-jc-sa card-size" data-id={cards[index].codigo}>
            <div className='margin-b-20 text-titulo'>{title}</div>
              { body }
              { cancelar &&
                 <div className='flex row jc-center'>
                 { cancelar }
                 { guardar && cards[index].checking &&  guardar}
                </div>
              }
          </div>
      }
    </>
  )
}

export default Card