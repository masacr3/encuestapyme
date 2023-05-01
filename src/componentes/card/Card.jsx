import './Card.css'
import efectivo from '../assets/efectivo.png'
import targetaCredito from '../assets/targetacredito.png'
import transferencia from '../assets/transferencia-movil.png'

function Card() {
  return (
    <div className="container flex col padding-h box flex-jc-sa card-size">
        <div className='margin-b-20 text-titulo'>Ingresos</div>
        <input type="date" name="" id="" className='margin-b-10' />
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
        <div className='flex row jc-center'>
          <button className='margin-r-10'>Listo!</button>
          <button>Cancelar</button>
        </div>
    </div>
  )
}

export default Card