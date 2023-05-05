/* eslint-disable no-unused-vars */

export function handlerDetalle (e, utils){
    let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
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

  export function handlerMonto (e,utils) {
    let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
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

  export function handlerFecha (e,utils){
    let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
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

  export function handlerOtraFecha (e,utils){
    let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
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

  export function handleTipoPago (i, utils){
    let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
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