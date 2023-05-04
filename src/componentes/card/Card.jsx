/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Card.css'
import efectivo from '../assets/efectivo.png'
import targetaCredito from '../assets/targetacredito.png'
import transferencia from '../assets/transferencia-movil.png'


function Card({title, id, kill=false ,children}) {

  return (
    <div className="container flex col padding-h box flex-jc-sa card-size" data-id={id}>
        <div className='margin-b-20 text-titulo'>{title}</div>
        { children.length 
            && children
              .filter((item, index) => (children.length-1) != index)
              .map((item,index) => (<div key={index}>{item}</div>) 
        )}
        { kill 
            &&
              <div className='flex row jc-center'>
                  {children.at(-1)}
              </div>
        }
        
    </div>
  )
}

export default Card