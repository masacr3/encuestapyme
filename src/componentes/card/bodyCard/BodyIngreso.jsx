/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import efectivo from '../../assets/efectivo.png'
import targetaCredito from '../../assets/targetacredito.png'
import transferencia from '../../assets/transferencia-movil.png'
import { handlerDetalle, handlerMonto, handlerFecha, handlerOtraFecha, handleTipoPago} from './Bodyhandlers'
import {Container, ContainerCheck, Checkbox, Pay, Row, Mr10, Mb10, TextItem} from './BodyIngreso.module.css'



function BodyIngreso({index, cards, updateCards}) {

    const imagenes = [efectivo, transferencia, targetaCredito]

    const [bodyData, setBodyData] = useState( cards[index] )

    const utils = [ { bodyData : bodyData , setBodyData : setBodyData}, { cards : cards, updateCards : updateCards, index: index} ]


    return (
            <>
              <div className={Container}>
                <span className={TextItem}>Fecha</span>
                  <input 
                    type="date" 
                    onChange={e=> handlerFecha(e,utils)}
                    value={bodyData.fecha}
                  />
              </div>
                
              <div className={Container}>
                <span className={TextItem}>Detalle</span>
                  <input 
                    type="text" 
                    placeholder='Ingrese detalle'
                    onChange={e=>handlerDetalle(e,utils)}
                    value={bodyData.detalle}
                  />
                </div>
                
                <div className={Container}>
                  <span className={TextItem}>Monto</span>
                  <input 
                    type="number"
                    placeholder='Ingrese monto'
                    onChange={e => handlerMonto(e,utils)}
                    value={bodyData.monto}
                  />
                </div>
                
                <div className={ContainerCheck}>
                  <span className={TextItem}>Tipo pago</span>
                  <div className={Row}>
                    {imagenes.length && imagenes.map((imagen, index) =>(
                        <div key={index}>
                          <label className={Mr10}>
                            <img src={imagen} alt="" className={Pay} />
                            <input type="checkbox"
                              className={Checkbox}
                              checked={bodyData.tipopago[index]}
                              onChange={() => handleTipoPago(index,utils)}
                            />
                          </label>
                        </div>
                    ))}
                  </div>
                </div>
                { bodyData.tipopago.at(-1) &&
                  <div className={Container}>
                    <span className={TextItem}>Targeta Vto</span>
                    <input 
                      type="date" 
                      className={Mb10}
                      onChange={e=> handlerOtraFecha(e,utils)}
                      value={bodyData.otrafecha}
                    />
                  </div>
                }        
          </>
        )
}


export default BodyIngreso