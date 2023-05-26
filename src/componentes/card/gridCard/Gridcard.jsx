/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {ContainerGrid,ContainerBtonFlotante, BtonFlotante, BtonAgregar,BtonEliminar, TitleGrid, TitleGridTitle, TitleGridEliminar, NoData, NoScroll} from './Gridcard.module.css'
import Card from "../Card"
import imgAgregar from '../../assets/agregar.png'
import BodyIngreso from "../bodyCard/BodyIngreso"
import { useGridCardHooks } from './useGridCardHooks'
import BodyEgresos from '../bodyCard/BodyEgresos'



function Gridcard({title}) {

  const {ingresoCards, setIngresoCards, egresoCards, setEgresoCards ,agregar, setAgregar, eliminarCard,guardarCard,crearCard,eliminarDatos} = useGridCardHooks();
    
  

    return (
      <>
      {title == "Ingresos" ? (

        <div className={ContainerBtonFlotante}>
        {agregar  
            &&  
            <div className={BtonFlotante}>
              <img src={imgAgregar} className={BtonAgregar} onClick={() => crearCard({title})} />
            </div>
          }
        
        { ingresoCards.length > 0 &&
          <div className={TitleGrid}>
            <p className={TitleGridTitle}>Items</p>
            <button className={TitleGridEliminar} onClick={eliminarDatos({title})}>Eliminar datos</button>
          </div>
        }            
        <div className={ContainerGrid}>
            { ingresoCards.length === 0 && <p className={NoData}>Sin datos</p>}
            { ingresoCards.length > 0 && ingresoCards.map( (card, index) => (
                <Card 
                  title={title}
                  key={index} 
                  body={<BodyIngreso 
                              index={index}
                              cards={ingresoCards}
                              updateCards={setIngresoCards}
                        />}
                  index={index}
                  resumen={ingresoCards.resumen}
                  cards={ingresoCards}
                  updateCards={setIngresoCards}
                  cancelar={<button className={BtonEliminar} onClick={()=>eliminarCard(index, {title})}>Cancelar</button>}
                  guardar={<button onClick={()=>guardarCard(index, {title})}>Guardar</button>}
                  agregarCard={setAgregar}
                />
                  
              ))
            }
         </div>
    </div>
      ) :
      ( 
        
        <div className={ContainerBtonFlotante}>
          <h1> esto22 es el gridcardx</h1>
        {agregar  
            &&  
            <div className={BtonFlotante}>
              <img src={imgAgregar} className={BtonAgregar} onClick={()=>crearCard({title})} />
            </div>
          }
        
        { egresoCards.length > 0 &&
          <div className={TitleGrid}>
            <p className={TitleGridTitle}>Items</p>
            <button className={TitleGridEliminar} onClick={eliminarDatos({title})}>Eliminar datos</button>
          </div>
        }            
        <div className={ContainerGrid}>
            { egresoCards.length === 0 && <p className={NoData}>Sin datos</p>}
            { egresoCards.length > 0 && egresoCards.map( (card, index) => (
                <Card 
                  title={title}
                  key={index} 
                  body={<BodyEgresos 
                              index={index}
                              cards={egresoCards}
                              updateCards={setEgresoCards}
                        />}
                  index={index}
                  resumen={egresoCards.resumen}
                  cards={egresoCards}
                  updateCards={setEgresoCards}
                  cancelar={<button className={BtonEliminar} onClick={()=>eliminarCard(index, {title})}>Cancelar</button>}
                  guardar={<button onClick={()=>guardarCard(index,{title})}>Guardar</button>}
                  agregarCard={setAgregar}
                />
                  
              ))
            }
         </div>
    </div>
      )
      }
        







      </>
        

        
  )
}

export default Gridcard