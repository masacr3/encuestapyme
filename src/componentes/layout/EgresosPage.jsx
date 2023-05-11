import Logo from "../logo/Logo"
import Gridcard from "../card/gridCard/Gridcard"
import { Link } from 'react-router-dom';
import TabBar from "../tabBar/TabBar";

function EgresosPage() {
  return (
    <>
        <TabBar/>
        <Logo />
        <h2>Egresos:</h2>
        <Gridcard title={"Egresos"}/>
    </>
  )
}

export default EgresosPage