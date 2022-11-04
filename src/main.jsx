import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

import { BrowserRouter,Route, Routes } from "react-router-dom";
import App from './containers/App';
import Registrar from './components/Form';
import VehicleView from './components/VehicleView';
import RegistroVehi from './components/Formulario';
import ConsultaVehi from './pages/ConsultaVehicular';

import  SignOut from "./components/SingOut";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
    <Route path="/" element={ <App/>}/>  
    <Route path="/SingOut" element={ <SignOut/>}/>
    <Route path="/registrase" element={ <Registrar/>}/>
    <Route path="/VehicleView" element={<VehicleView/>}/>
    <Route path="/RegistroVehi" element={<RegistroVehi/>}/>
    <Route path="/consultaVehi" element={<ConsultaVehi/>}/>
    
    </Routes>
  </BrowserRouter>
</React.StrictMode>


);
