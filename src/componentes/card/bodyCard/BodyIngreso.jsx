import efectivo from '../../assets/efectivo.png'
import targetaCredito from '../../assets/targetacredito.png'
import transferencia from '../../assets/transferencia-movil.png'

function BodyIngreso() {

    return (
    <>
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
         
          {/* { kill &&
              <div className='flex row jc-center'>
                  {item}
              </div>
           } */}
           
  </>
  )
        }


export default BodyIngreso