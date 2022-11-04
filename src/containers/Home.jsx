import { ActionButton } from "../components/ActionButton";
import repuveAviso from "../assets/imgs/repuve-aviso.jpg";
import repuveAtencion from "../assets/imgs/repuve-atencion.png";
import addressPhoto from "../assets/imgs/address-photo.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/styles/Home.css";

export function Home() {
  return (
    <>
      <Header />
      <div>
        <div>
          <button  type="submit"><a  href="/VehicleView">Consuta tu vehiculo</a></button>
            <h2>Registro Publico Vehicular REPUVE</h2>
            <p>
              Secretariado Ejecutivo del Sistema Nacional de Seguridad Pública |
              24 de julio de 2020
            </p>
            <img src={repuveAviso} className="banner" />
          </div>

          <hr />

          <div>
            <h2>Acciones</h2>
            <div className="actions">
              <ActionButton text="Opcion 1" href="#" className="actionButton" />
              <ActionButton text="Opcion 2" href="#" className="actionButton" />
              <ActionButton text="Opcion 3" href="#" className="actionButton" />
            </div>

            <img src={repuveAtencion} className="banner" />
          </div>

          <hr />

          <div className="contact">

            <div>
              <h2>Contacto 🗺️</h2>
              <p className="address">
                Calle América Número 300 |Colonia los Reyes, Alcaldía Coyoacán
                Ciudad de México C.P. 04330
              </p>
            </div>

            <div>
              <img src={addressPhoto}  className="addressPhoto" />
              <p className="addressPhotoDescription">Dirección General del Registro Público Vehicular</p>
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;