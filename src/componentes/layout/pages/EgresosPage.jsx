import Logo from "../../logo/Logo"
import Gridcard from "../../card/gridCard/Gridcard"
import TabBar from "../../tabBar/TabBar";


export const EgresosPage = () => {
  return (
    <>
        <TabBar/>
        <Logo />
        <h2>Egresos:</h2>
        <Gridcard title={"Egresos"}/>
    </>
  )
}
