/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {ContainerGrid,ContainerBtonFlotante, BtonFlotante, BtonAgregar,BtonEliminar, TitleGrid, TitleGridTitle, TitleGridEliminar, NoData, NoScroll} from './Gridcard.module.css'
import Card from "../Card"
import imgAgregar from '../../assets/agregar.png'
import BodyIngreso from "../bodyCard/BodyIngreso"
import { useGridCardHooks } from './useGridCardHooks'
import BodyEgresos from '../bodyCard/BodyEgresos'



function Gridcard({title}) {

  const {cards, setCards, agregar, setAgregar, eliminarCard,guardarCard,crearCard,eliminarDatos} = useGridCardHooks();
    
  

    return (
      <>
      {title == "Ingresos" ? (

        <div className={ContainerBtonFlotante}>
        {agregar  
            &&  
            <div className={BtonFlotante}>
              <img src={imgAgregar} className={BtonAgregar} onClick={e=>crearCard(e)} />
            </div>
          }
        
        { cards.length > 0 &&
          <div className={TitleGrid}>
            <p className={TitleGridTitle}>Items</p>
            <button className={TitleGridEliminar} onClick={eliminarDatos}>Eliminar datos</button>
          </div>
        }            
        <div className={ContainerGrid}>
            { cards.length === 0 && <p className={NoData}>Sin datos</p>}
            { cards.length > 0 && cards.map( (card, index) => (
                <Card 
                  title={title}
                  key={index} 
                  body={<BodyIngreso 
                              index={index}
                              cards={cards}
                              updateCards={setCards}
                        />}
                  index={index}
                  resumen={card.resumen}
                  cards={cards}
                  updateCards={setCards}
                  cancelar={<button className={BtonEliminar} onClick={()=>eliminarCard(index)}>Cancelar</button>}
                  guardar={<button onClick={()=>guardarCard(index)}>Guardar</button>}
                  agregarCard={setAgregar}
                />
                  
              ))
            }
         </div>
    </div>
      ) :
      ( 
        
        <div className={ContainerBtonFlotante}>
          <h1> esto es el gridcard</h1>
        {agregar  
            &&  
            <div className={BtonFlotante}>
              <img src={imgAgregar} className={BtonAgregar} onClick={e=>crearCard(e)} />
            </div>
          }
        
        { cards.length > 0 &&
          <div className={TitleGrid}>
            <p className={TitleGridTitle}>Items</p>
            <button className={TitleGridEliminar} onClick={eliminarDatos}>Eliminar datos</button>
          </div>
        }            
        <div className={ContainerGrid}>
            { cards.length === 0 && <p className={NoData}>Sin datos</p>}
            { cards.length > 0 && cards.map( (card, index) => (
                <Card 
                  title={title}
                  key={index} 
                  body={<BodyEgresos 
                              index={index}
                              cards={cards}
                              updateCards={setCards}
                        />}
                  index={index}
                  resumen={card.resumen}
                  cards={cards}
                  updateCards={setCards}
                  cancelar={<button className={BtonEliminar} onClick={()=>eliminarCard(index)}>Cancelar</button>}
                  guardar={<button onClick={()=>guardarCard(index)}>Guardar</button>}
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