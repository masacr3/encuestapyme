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
        { children.length && console.log(children.length)}
        { children.length && children.filter((item, index) => children.length != index)
                                       .map((item,index) => (<div key={index}>{item}</div>) 
        )}


        {/* <input type="date" name="" id="" className='margin-b-10' />
        
        <div className='flex row margin-b-10'>
         <span className='item margin-r-20'>Detalle</span>
          <input type="text" placeholder='Ingrese detalle'/>
        </div>
        
        <div className='flex row margin-b-10'>
          <span className='item margin-r-20'>Monto</span>
          <input type="text" placeholder='Ingrese monto'/>
        </div>
        
        <div className='flex row margin-b-10 flex-jc-sa align-center'>
          <span className='item'>Tipo pago</span>
          <div className='flex row'>
            <div>
              <label className='margin-r-10'>
                <img src={efectivo} alt="" className='card-pay' />
                <input type="checkbox" name="" id="" className='checkbox-round'/>
              </label>
            </div>
            <div>
              <label className='margin-r-10'>
                <img src={targetaCredito} alt="" className='card-pay' />
                <input type="checkbox" name="" id="" className='checkbox-round' />
              </label>
            </div>
            <div>
              <label>
                <img src={transferencia} alt="" className='card-pay' />
                <input type="checkbox" name="" id="" className='checkbox-round' />
              </label>
            </div>
          </div>
        </div>
         */}
          {/* { kill &&
              <div className='flex row jc-center'>
                  {item}
              </div>
           } */}
        
    </div>
  )
}

export default Card