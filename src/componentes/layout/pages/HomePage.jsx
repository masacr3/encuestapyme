
import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import TabBar from "../../tabBar/TabBar";
import {Navigate} from 'react-router-dom'


export const HomePage = () => {
  const { logged } = useContext( AuthContext );
  return (
    <>
    {!logged && <Navigate to="/login" />}
    <TabBar/>
    <h2>Home:</h2>
    </>
  )
}
