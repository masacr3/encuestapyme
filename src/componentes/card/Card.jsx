/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Card.css'
import efectivo from '../assets/efectivo.png'
import targetaCredito from '../assets/targetacredito.png'
import transferencia from '../assets/transferencia-movil.png'


function Card({title, body, id, kill=null , guardar=null, checkdatos=false}) {

  let len = 1 + (kill ? 1 : 0 ) + (guardar ? 1 : 0)


  return (
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
  )
}

export default Card