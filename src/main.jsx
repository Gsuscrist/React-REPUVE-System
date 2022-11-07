import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

// tienes que importar lo que descargaste, osea lo de abajo
import { BrowserRouter,Route, Routes } from "react-router-dom";
//luego importas los componentes
import App from './containers/App';
import FormVehicleRegistre from "./components/FormVehicleRegistre.jsx";
import ConsultaVehicular from "./pages/ConsultaVehicular";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  {/* Esta es la "estructura para utilizar las rutas", 
  estan en el main, por que es como la rama principal que te va indicando donde esta cada cosa */}
  <BrowserRouter>
    <Routes>
      {/* el nombre que contiene path es lo que se va utilizar mas adelante 
      la ruta principal o pa pestaña principal que se abrira es la que no tiene path="/"*/}
    <Route path="/" element={ <App/>}/>
    <Route path="/RegistroVehi" element={<FormVehicleRegistre/>}/>
    <Route path="/consultaVehi" element={<ConsultaVehicular></ConsultaVehicular>}/>
    
    </Routes>
  </BrowserRouter>
</React.StrictMode>


);
