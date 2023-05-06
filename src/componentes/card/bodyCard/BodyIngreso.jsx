/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import efectivo from '../../assets/efectivo.png'
import targetaCredito from '../../assets/targetacredito.png'
import transferencia from '../../assets/transferencia-movil.png'
import { handlerDetalle, handlerMonto, handlerFecha, handlerOtraFecha, handleTipoPago} from './Bodyhandlers'

function BodyIngreso({index, cards, updateCards}) {

    const imagenes = [efectivo, transferencia, targetaCredito]

    const [bodyData, setBodyData] = useState( cards[index] )

    const utils = [ { bodyData : bodyData , setBodyData : setBodyData}, { cards : cards, updateCards : updateCards, index: index} ]


    return (
            <>
              <div className='flex row margin-b-10'>
                <span className='item margin-r-20'>Fecha</span>
                  <input 
                    type="date" 
                    className='margin-b-10'
                    onChange={e=> handlerFecha(e,utils)}
                    value={bodyData.fecha}
                  />
              </div>
                
                <div className='flex row margin-b-10'>
                <span className='item margin-r-20'>Detalle</span>
                  <input 
                    type="text" 
                    placeholder='Ingrese detalle'
                    onChange={e=>handlerDetalle(e,utils)}
                    value={bodyData.detalle}
                  />
                </div>
                
                <div className='flex row margin-b-10'>
                  <span className='item margin-r-20'>Monto</span>
                  <input 
                    type="number"
                    placeholder='Ingrese monto'
                    onChange={e => handlerMonto(e,utils)}
                    value={bodyData.monto}
                  />
                </div>
                
                <div className='flex row margin-b-10 flex-jc-sa align-center'>
                  <span className='item'>Tipo pago</span>
                  <div className="flex row">
                    {imagenes.length && imagenes.map((imagen, index) =>(
                        <div key={index}>
                          <label className='margin-r-10'>
                            <img src={imagen} alt="" className='card-pay' />
                            <input type="checkbox"
                              className='checkbox-round'
                              checked={bodyData.tipopago[index]}
                              onChange={() => handleTipoPago(index,utils)}
                            />
                          </label>
                        </div>
                    ))}
                  </div>
                </div>
                { bodyData.tipopago.at(-1) &&
                  <div className='flex row margin-b-10'>
                    <span className='item margin-r-20'>Targeta Vto</span>
                    <input 
                      type="date" 
                      className='margin-b-10'
                      onChange={e=> handlerOtraFecha(e,utils)}
                      value={bodyData.otrafecha}
                    />
                  </div>
                }        
          </>
        )
}


export default BodyIngreso