/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Card.css'
import Lapiz from '../assets/lapiz.png'


function Card({title, body, data, index, colapsar,updatecolapsar,agregar, id, kill=null , guardar=null, checkdatos=false}) {
  let len = 1 + (kill ? 1 : 0 ) + (guardar ? 1 : 0)
  
  const meCliqueo = () => {
    agregar(false)
    let newColapsar = colapsar.map((item,i)=> i === index ? false : item)
    updatecolapsar(newColapsar)
  }
  
  return (
    <>
      { colapsar[index] && 
        <div className="container row box card-colapsed" data-id={id} >
             <div className='margin-r-20 text-resumen'>{data.fecha}</div>
             <div className='text-resumen'>{data.detalle}</div>
             <div className='text-resumen'>${data.monto}</div>
             <img src={Lapiz} className='editar-img' onClick={() => meCliqueo()}/>
        </div>

      }
      {
        !colapsar[index] &&
          <div className="container flex col padding-h box flex-jc-sa card-size" data-id={id}>
            <div className='margin-b-20 text-titulo'>{title}</div>
              { body }
              { (kill || guardar) &&
                 <div className='flex row jc-center'>
                 { kill && kill }
                  { guardar && checkdatos &&  guardar}
                </div>
              }
          </div>
      }
    </>
  )
}

export default Card