import Logo from "../../logo/Logo"
import Gridcard from "../../card/gridCard/Gridcard"
import { Link } from 'react-router-dom';
import TabBar from "../../tabBar/TabBar";


export const IngresosPage = () => {
  return (
    <>
        <TabBar/>
        <Logo />
        <h2>Ingresos:</h2>
        <Gridcard title={"Ingresos"}/>
    </>
  )
}
