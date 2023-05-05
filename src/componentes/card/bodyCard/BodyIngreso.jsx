/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import efectivo from '../../assets/efectivo.png'
import targetaCredito from '../../assets/targetacredito.png'
import transferencia from '../../assets/transferencia-movil.png'

function BodyIngreso({id, datos, update, indexCheck,  check, updateCheck}) {

    const imagenes = [efectivo, transferencia, targetaCredito]

    const[detalle, setDetalle] = useState('')
    const[monto, setMonto] = useState('')
    const[fecha, setFecha] = useState('')
    const[tipoPago, setTipoPago] = useState([false,false,false])
    const[otraFecha, setOtraFecha] = useState('')

    const handlerDetalle = e =>{
      //verifico que todos los items anteriores tengan contenido
      let lista = [monto, fecha, e.target.value]
      let ok = lista.filter(item => item !== "").length === lista.length

      //verifico si algun checkbox esta seleccionado
      ok = ok && (tipoPago.filter(item => item).length > 0)

      //caso borde
      if (tipoPago.filter(item => item).length === 1 && tipoPago[2] ){
        ok = ok && otraFecha !=""
      }

      //actualizo las autorizaciones para mostrar el boton terminar
      let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)
      
      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, detalle : e.target.value
          }
        }
        return item
      })
      
      setDetalle(e.target.value)
      update(newDatos)
      updateCheck(newCheck)
    }

    const handlerMonto = e =>{
      //verifico que todos los items anteriores tengan contenido
      let lista = [detalle, fecha, e.target.value]
      let ok = lista.filter(item => item !== "").length === lista.length

      //verifico si algun checkbox esta seleccionado
      ok = ok && (tipoPago.filter(item => item).length > 0)

      //caso borde
      if (tipoPago.filter(item => item).length === 1 && tipoPago[2] ){
        ok = ok && otraFecha !=""
      }

      //actualizo las autorizaciones para mostrar el boton terminar
      let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)
      

      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, monto : e.target.value
          }
        }
        return item
      })

      setMonto(e.target.value)
      update(newDatos)
      updateCheck(newCheck)
    }

    const handlerFecha = e =>{
      //verifico que todos los items anteriores tengan contenido
      let lista = [detalle, monto, e.target.value]
      let ok = lista.filter(item => item !== "").length === lista.length

      //verifico si algun checkbox esta seleccionado
      ok = ok && (tipoPago.filter(item => item).length > 0)
      
      //caso borde
      if (tipoPago.filter(item => item).length === 1 && tipoPago[2] ){
        ok = ok && otraFecha !=""
      }

      //actualizo las autorizaciones para mostrar el boton terminar
      let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)
      
      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, fecha : e.target.value
          }
        }
        return item
      })
      
      setFecha(e.target.value)
      update(newDatos)
      updateCheck(newCheck)
    }

    const handlerOtraFecha = e =>{
      //verifico que todos los items anteriores tengan contenido
      let lista = [detalle, monto, fecha, e.target.value]
      let ok = lista.filter(item => item !== "").length === lista.length

      //verifico si algun checkbox esta seleccionado
      ok = ok && (tipoPago.filter(item => item).length > 0)

      //actualizo las autorizaciones para mostrar el boton terminar
      let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)

      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, otrafecha : e.target.value
          }
        }
        return item
      })

      setOtraFecha(e.target.value)
      update(newDatos)
      updateCheck(newCheck)
    }

    const handleTipoPago = (i) =>{
      //verifico que todos los items anteriores tengan contenido
      let lista = [detalle, monto, fecha]
      let ok = lista.filter(item => item !== "").length === lista.length
      
      //verifico si algun checkbox esta seleccionado
      let copypago = [...tipoPago]
      copypago[i] = !copypago[i]
      ok = ok && (copypago.filter(item => item).length > 0)

      //caso borde
      if (copypago[2] ){
        ok = ok && (otraFecha !="")
      }
      
      //actualizo el set de datos
      let newDatos = datos.map(item =>{
        if(item.codigo === id){
          return {
            ...item, tipopago : copypago
          }
        }
        return item
      })

      //quiere decir q deselecciono tarjeta
      if(i===2 && !copypago[i]){
        ok = copypago.filter((item,index)=> index!=2 && item).length > 0
        newDatos = datos.map(item =>{
          if(item.codigo === id){
            return {
              ...item, otrafecha : ""
            }
          }
          return item
        })
        setOtraFecha("")
      }

      //actualizo las autorizaciones para mostrar el boton terminar
      let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)

      //guardo
      setTipoPago( copypago )
      update(newDatos)
      updateCheck(newCheck)
    }

    return (
    <>
      <div className='flex row margin-b-10'>
        <span className='item margin-r-20'>Fecha</span>
          <input 
            type="date" 
            className='margin-b-10'
            onChange={handlerFecha}
            value={fecha}
          />
      </div>
        
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
            type="number"
            placeholder='Ingrese monto'
            onChange={handlerMonto}
            value={monto}
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
                      checked={tipoPago[index]}
                      onChange={() => handleTipoPago(index)}
                    />
                  </label>
                </div>
            ))}
          </div>
        </div>
        { tipoPago.at(-1) &&
          <div className='flex row margin-b-10'>
            <span className='item margin-r-20'>Targeta Vto</span>
            <input 
              type="date" 
              className='margin-b-10'
              onChange={handlerOtraFecha}
              value={otraFecha}
            />
          </div>
        }       
  </>
  )
        }


export default BodyIngreso