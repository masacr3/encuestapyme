import Logo from "../logo/Logo"
import Gridcard from "../card/gridCard/Gridcard"
import { Link } from 'react-router-dom';
import TabBar from "../tabBar/TabBar";

function IngresosPage() {
  return (
    <>
        <TabBar/>
        <Logo />
        <h2>Ingresos:</h2>
        <Gridcard title={"Ingresos"}/>
    </>
  )
}

export default IngresosPage