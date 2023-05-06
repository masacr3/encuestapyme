/* eslint-disable no-unused-vars */

export function handlerDetalle (e, utils){
    // let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
    // //verifico que todos los items anteriores tengan contenido
    // let lista = [monto, fecha, e.target.value]
    // let ok = lista.filter(item => item !== "").length === lista.length

    // //verifico si algun checkbox esta seleccionado
    // ok = ok && (tipoPago.filter(item => item).length > 0)

    // //caso borde
    // if (tipoPago.filter(item => item).length === 1 && tipoPago[2] ){
    //   ok = ok && otraFecha !=""
    // }

    // //actualizo las autorizaciones para mostrar el boton terminar
    // let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)
    
    // let newDatos = datos.map(item =>{
    //   if(item.codigo === id){
    //     return {
    //       ...item, detalle : e.target.value
    //     }
    //   }
    //   return item
    // })
    
    // setDetalle(e.target.value)
    // update(newDatos)
    // updateCheck(newCheck)
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata
    //actualizo body
    let newBody = {...bodyData, detalle : e.target.value }
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    newBody = {...newBody, checking : checking }

    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handlerMonto (e,utils) {
    // let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
    // //verifico que todos los items anteriores tengan contenido
    // let lista = [detalle, fecha, e.target.value]
    // let ok = lista.filter(item => item !== "").length === lista.length

    // //verifico si algun checkbox esta seleccionado
    // ok = ok && (tipoPago.filter(item => item).length > 0)

    // //caso borde
    // if (tipoPago.filter(item => item).length === 1 && tipoPago[2] ){
    //   ok = ok && otraFecha !=""
    // }

    // //actualizo las autorizaciones para mostrar el boton terminar
    // let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)
    

    // let newDatos = datos.map(item =>{
    //   if(item.codigo === id){
    //     return {
    //       ...item, monto : e.target.value
    //     }
    //   }
    //   return item
    // })

    // setMonto(e.target.value)
    // update(newDatos)
    // updateCheck(newCheck)
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

    //actualizo body
    let newBody = {...bodyData, monto : e.target.value }
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    newBody = {...newBody, checking : checking }

    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handlerFecha (e,utils){
    // let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
    // //verifico que todos los items anteriores tengan contenido
    // let lista = [detalle, monto, e.target.value]
    // let ok = lista.filter(item => item !== "").length === lista.length

    // //verifico si algun checkbox esta seleccionado
    // ok = ok && (tipoPago.filter(item => item).length > 0)
    
    // //caso borde
    // if (tipoPago.filter(item => item).length === 1 && tipoPago[2] ){
    //   ok = ok && otraFecha !=""
    // }

    // //actualizo las autorizaciones para mostrar el boton terminar
    // let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)
    
    // let newDatos = datos.map(item =>{
    //   if(item.codigo === id){
    //     return {
    //       ...item, fecha : e.target.value
    //     }
    //   }
    //   return item
    // })
    
    // setFecha(e.target.value)
    // update(newDatos)
    // updateCheck(newCheck)
    
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

    //actualizo body
    let newBody = {...bodyData, fecha : e.target.value }
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    newBody = {...newBody, checking : checking }

    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handlerOtraFecha (e,utils){
    // let {fecha, detalle, montob, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
    // //verifico que todos los items anteriores tengan contenido
    // let lista = [detalle, monto, fecha, e.target.value]
    // let ok = lista.filter(item => item !== "").length === lista.length

    // //verifico si algun checkbox esta seleccionado
    // ok = ok && (tipoPago.filter(item => item).length > 0)

    // //actualizo las autorizaciones para mostrar el boton terminar
    // let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)

    // let newDatos = datos.map(item =>{
    //   if(item.codigo === id){
    //     return {
    //       ...item, otrafecha : e.target.value
    //     }
    //   }
    //   return item
    // })

    // setOtraFecha(e.target.value)
    // update(newDatos)
    // updateCheck(newCheck)
    


    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

    //actualizo body
    let newBody = {...bodyData, otrafecha : e.target.value }
    
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    newBody = {...newBody, checking : checking }
    
    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handleTipoPago (i, utils){
    // let {fecha, detalle, monto, tipoPago, otraFecha, indexCheck, datos, check, id, setDetalle,setMonto,setFecha,setOtraFecha,setTipoPago, update, updateCheck} = utils
    // //verifico que todos los items anteriores tengan contenido
    // let lista = [detalle, monto, fecha]
    // let ok = lista.filter(item => item !== "").length === lista.length
    
    // //verifico si algun checkbox esta seleccionado
    // let copypago = [...tipoPago]
    // copypago[i] = !copypago[i]
    // ok = ok && (copypago.filter(item => item).length > 0)

    // //caso borde
    // if (copypago[2] ){
    //   ok = ok && (otraFecha !="")
    // }
    
    // //actualizo el set de datos
    // let newDatos = datos.map(item =>{
    //   if(item.codigo === id){
    //     return {
    //       ...item, tipopago : copypago
    //     }
    //   }
    //   return item
    // })

    // //quiere decir q deselecciono tarjeta
    // if(i===2 && !copypago[i]){
    //   ok = copypago.filter((item,index)=> index!=2 && item).length > 0
    //   newDatos = datos.map(item =>{
    //     if(item.codigo === id){
    //       return {
    //         ...item, otrafecha : ""
    //       }
    //     }
    //     return item
    //   })
    //   setOtraFecha("")
    // }

    // //actualizo las autorizaciones para mostrar el boton terminar
    // let newCheck = check.map((item,index) => index === indexCheck ? (ok ? true : false) : item)

    // //guardo
    // setTipoPago( copypago )
    // update(newDatos)
    // updateCheck(newCheck)
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

   //verifico si algun checkbox esta seleccionado
    let copypago = [...bodyData.tipopago]
    copypago[i] = !copypago[i]
   
     //actualizo body
     let newBody = {...bodyData, tipopago : copypago }
     let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
     
     checking = checking && (copypago.filter(item => item).length > 0)

    //caso borde
    if (copypago[2] ){
      checking = checking && (newBody.otrafecha !="")
    }

    //quiere decir q deselecciono tarjeta
    if(i===2 && !copypago[i]){
      checking = copypago.filter((item,index)=> index!=2 && item).length > 0
      newBody = { ...newBody, otrafecha : ""}
    }
     
     newBody = {...newBody, checking : checking }

     //pusheo cambio
     updateCards( cards.map((item, i) => i === index ? newBody : item))
     setBodyData(newBody)

  }