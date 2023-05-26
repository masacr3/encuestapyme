//Custom hooks
import { animateScroll as scroll } from 'react-scroll'
import { v4 } from 'uuid' /*genera id aleatorios*/
import { useEffect, useState } from "react"

import React from 'react'

export const useGridCardHooks = () => {
  
    const [ingresoCards, setIngresoCards] = useState([]); //toda la informacion de las cards de INGRESOS la vamos a manejar aca
    const [egresoCards, setEgresoCards] = useState([]); //toda la informacion de las cards de EGRESOS la vamos a manejar aca

    //const[cards, setCards] = useState([]) 
    const[agregar, setAgregar] = useState(true) //es un servicio que da la gridCard

    
    console.log("me dibujo otra vez :)");
    
        useEffect(() => {
            const items = JSON.parse(localStorage.getItem('data-ingreso'));
            if (items) {
             setIngresoCards(items);
            }
          }, []);

          useEffect(() => {
            const items = JSON.parse(localStorage.getItem('data-egreso'));
            if (items) {
             setEgresoCards(items);
            }
          }, []);
    
  
        
    
        const eliminarCard = (index,title) =>{
          if(title === 'Ingresos'){
            let quitarCard = ingresoCards.filter(card => card.codigo !== cards[index].codigo )
          setIngresoCards(quitarCard)
    
          //pregunta si hay alguna otra targenta por editar
          if ( quitarCard.length == 0 || quitarCard.filter(card => card.checking).length > 0){
            setAgregar(true)
          }
          else{
            setAgregar(false)
          }
    
          document.body.style.overflowY = "auto"
        } else if (title == 'Egresos') {
          let quitarCard = egresoCards.filter(card => card.codigo !== cards[index].codigo )
          setEgresoCards(quitarCard)
    
          //pregunta si hay alguna otra targenta por editar
          if ( quitarCard.length == 0 || quitarCard.filter(card => card.checking).length > 0){
            setAgregar(true)
          }
          else{
            setAgregar(false)
          }
    
          document.body.style.overflowY = "auto"
        }
          }
          
    
        const guardarCard = (index,title) =>{
    
          if(title == 'Ingresos'){

          let newCard = { ...ingresoCards[index], resumen: true}
          let resumen = ingresoCards.map( card => card.codigo === newCard.codigo ? newCard : card)
          setIngresoCards(resumen)
          guardarDatos(resumen)
    
          if ( resumen.filter(card => card.checking).length > 0){
            setAgregar(true)
          }
          else{
            setAgregar(false)
          }
    
          scroll.scrollToBottom()
          document.body.style.overflowY = "auto"
          } else if (title == 'Egresos'){

            let newCard = { ...egresoCards[index], resumen: true}
          let resumen = egresoCards.map( card => card.codigo === newCard.codigo ? newCard : card)
          setEgresosCards(resumen)
          guardarDatos(resumen)
    
          if ( resumen.filter(card => card.checking).length > 0){
            setAgregar(true)
          }
          else{
            setAgregar(false)
          }
    
          scroll.scrollToBottom()
          document.body.style.overflowY = "auto"
          }
        }
      
        const crearCard = (title) =>{
          let code = v4()
          console.log(title)
          let info = {
            codigo : code,
            fecha : "",
            otrafecha : "",
            detalle : "",
            monto: "",
            tipopago : [false, false, false],
            checking : false,
            resumen : false
          }
          if(title == 'Ingresos'){
            setIngresoCards([... ingresoCards, info])
            setAgregar(false)
          } else if (title == 'Egresos'){
            setEgresoCards([... egresoCards, info])
            setAgregar(false)
          }   
          
          scroll.scrollToBottom()
          document.body.style.overflowY = "hidden"
        }
    
        function guardarDatos(datos, title){
          
          if(title == 'Ingresos'){

            localStorage.setItem('data-ingreso', JSON.stringify(datos))

          } else if (title == 'Egresos'){

            localStorage.setItem('data-egreso', JSON.stringify(datos))
          }  
          let datosGuardadosIngreso = JSON.parse(localStorage.getItem('data-ingreso'))
          console.log("Esta data se guardo",datosGuardadosIngreso)

          let datosGuardadosEgresos = JSON.parse(localStorage.getItem('data-ingreso'))
          console.log("Esta data se guardo",datosGuardadosEgresos)
        }
    
        function eliminarDatos(title){
          
          if(title == 'Ingresos'){
            localStorage.clear()
            setIngresoCards([])
          } else if (title == 'Egresos'){
            localStorage.clear()
            setEgresoCards([])
          }  
          
        }
    
        return {
            ingresoCards, setIngresoCards,
            egresoCards, setEgresoCards,
            agregar, setAgregar,
            eliminarCard,
            guardarCard,
            crearCard,
            guardarDatos,
            eliminarDatos
    
        }

}


