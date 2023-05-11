//Custom hooks
import { animateScroll as scroll } from 'react-scroll'
import { v4 } from 'uuid' /*genera id aleatorios*/
import { useEffect, useState } from "react"

import React from 'react'

export const useGridCardHooks = () => {
  console.log("me dibujo otra vez :)");
    const[cards, setCards] = useState([]) //toda la informacion de las cards la vamos a manejar aca
    const[agregar, setAgregar] = useState(true) //es un servicio que da la gridCard
    
       

    
        useEffect(() => {
            const items = JSON.parse(localStorage.getItem('data-ingreso'));
            if (items) {
             setCards(items);
            }
          }, []);
    
  
        
    
        const eliminarCard = (index) =>{
          let quitarCard = cards.filter(card => card.codigo !== cards[index].codigo )
          setCards(quitarCard)
    
          //pregunta si hay alguna otra targenta por editar
          if ( quitarCard.length == 0 || quitarCard.filter(card => card.checking).length > 0){
            setAgregar(true)
          }
          else{
            setAgregar(false)
          }
    
          document.body.style.overflowY = "auto"
        }
    
        const guardarCard = (index) =>{
          let newCard = { ...cards[index], resumen: true}
          let resumen = cards.map( card => card.codigo === newCard.codigo ? newCard : card)
          setCards(resumen)
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
      
        const crearCard = () =>{
          let code = v4()
          
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
          setCards([... cards, info])
          setAgregar(false)
          
          scroll.scrollToBottom()
          document.body.style.overflowY = "hidden"
        }
    
        function guardarDatos(datos){
          localStorage.setItem('data-ingreso', JSON.stringify(datos))
    
          let datosGuardados = JSON.parse(localStorage.getItem('data-ingreso'))
          console.log("Esta data se guardo",datosGuardados)
        }
    
        function eliminarDatos(){
          localStorage.clear()
          setCards([])
        }
    
        return {
            cards, setCards,
            agregar, setAgregar,
            eliminarCard,
            guardarCard,
            crearCard,
            guardarDatos,
            eliminarDatos
    
        }

}


