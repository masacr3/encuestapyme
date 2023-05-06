/* eslint-disable no-unused-vars */

export function handlerDetalle (e, utils){
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata
    //actualizo body
    let newBody = {...bodyData, detalle : e.target.value }
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    checking = checking && newBody.tipopago.filter(item => item).length > 0 

    if(newBody.tipopago[2]){
      checking = newBody.otrofecha != ""
    }

    newBody = {...newBody, checking : checking }

    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handlerMonto (e,utils) {
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

    //actualizo body
    let newBody = {...bodyData, monto : e.target.value }
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    checking = checking && newBody.tipopago.filter(item => item).length > 0 

    if(newBody.tipopago[2]){
      checking = newBody.otrofecha != ""
    }

    newBody = {...newBody, checking : checking }

    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handlerFecha (e,utils){
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

    //actualizo body
    let newBody = {...bodyData, fecha : e.target.value }
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""

    checking = checking && newBody.tipopago.filter(item => item).length > 0 

    if(newBody.tipopago[2]){
      checking = newBody.otrofecha != ""
    }

    newBody = {...newBody, checking : checking }
    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handlerOtraFecha (e,utils){
    
    //desempaqueto
    const [baseBodydata, baseCards] = utils
    const {cards, updateCards, index} = baseCards
    const {bodyData, setBodyData} = baseBodydata

    //actualizo body
    let newBody = {...bodyData, otrafecha : e.target.value }
    
    let checking = newBody.fecha !="" && newBody.detalle !="" && newBody.monto !=""
    checking = checking && newBody.tipopago.filter(item => item).length > 0 

    if(newBody.tipopago[2]){
      checking = newBody.otrofecha != ""
    }


    newBody = {...newBody, checking : checking }
    
    
    //pusheo cambio
    updateCards( cards.map((item, i) => i === index ? newBody : item))
    setBodyData(newBody)
  }

  export function handleTipoPago (i, utils){
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