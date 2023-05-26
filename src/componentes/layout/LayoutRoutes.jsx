

import { Navigate, Route, Routes } from 'react-router-dom';

import { EgresosPage } from "./pages/EgresosPage";
import { HomePage } from "./pages/HomePage";
import { IngresosPage } from "./pages/IngresosPage";



export const LayoutRoutes = () => {
  return (
    <>
        <div className="container">
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="ingresos" element={<IngresosPage />} />
                
                <Route path="egresos" element={<EgresosPage />} />                            

                <Route path="/" element={<Navigate to="/home" />} />

            </Routes>
        </div>
    </>
  )
}
