/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import efectivo from '../../assets/efectivo.png'
import targetaCredito from '../../assets/targetacredito.png'
import transferencia from '../../assets/transferencia-movil.png'

function BodyIngreso({id, datos, update}) {

    const[detalle, setDetalle] = useState('')
    const[monto, setMonto] = useState('')
    const[fecha, setFecha] = useState('')

    const handlerDetalle = e =>{
      setDetalle(e.target.value)
      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, detalle : e.target.value
          }
        }
        return item
      })
      update(newDatos)
    }

    const handlerMonto = e =>{
      setMonto(e.target.value)
      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, monto : e.target.value
          }
        }
        return item
      })
      update(newDatos)
    }

    const handlerFecha = e =>{
      setFecha(e.target.value)
      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, fecha : e.target.value
          }
        }
        return item
      })
      update(newDatos)
    }

    return (
    <>
      <input 
        type="date" 
        className='margin-b-10'
        onChange={handlerFecha}
        value={fecha}
        />
        
        <div className='flex row margin-b-10'>
         <span className='item margin-r-20'>Detalle</span>
          <input 
            type="text" 
            placeholder='Ingrese detalle'
            onChange={handlerDetalle}
            value={detalle}
          />
        </div>
        
        <div className='flex row margin-b-10'>
          <span className='item margin-r-20'>Monto</span>
          <input 
            type="text"
            placeholder='Ingrese monto'
            onChange={handlerMonto}
            value={monto}
          />
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
  </>
  )
        }


export default BodyIngreso