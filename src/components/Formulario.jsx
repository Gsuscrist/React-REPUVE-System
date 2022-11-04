import '../assets/styles/Formulario.css'
import car from '../assets/imgs/car.svg'
import Advertencia from "./Advertencia.jsx";
import '../assets/styles/upload.css'
import upload from '../assets/imgs/upload.png'
import back from '../assets/imgs/back.svg'

function Formulario(){
    return(
            
            <div className="container-registroVehicular">
                <div className="encabezado-registroVehicular">
                    <img src={car} alt="iconoLupa" className="iconoCar"/>
                    <h1 className="titulo">Registro Vehicular</h1>
                </div>
                <Advertencia/>
                <div className="formulario-registroVehicular">
                    <form className="form-registroVehicular">
                        <div className="inputs">
                            <span className="input-texto"> Modelo del Vehiculo : </span>
                            <input type="text" className="input-form"/>
                        </div>
                        <div className="inputs">
                            <span className="input-texto"> Año del Vehiculo: </span>
                            <input type="text" className="input-form"/>
                        </div>
                        <div className="inputs">
                            <span className="input-texto"> Color del Vehiculo: </span>
                            <input type="text" className="input-form"/>
                        </div>
                        <div className="inputs">
                            <span className="input-texto"> Valo del Vehiculo(PESO MEXINCANO $): </span>
                            <input type="text" className="input-form"/>
                        </div>
                        <div className="inputs">
                            <span className="input-texto"> Kilometraje del Vehiculo : </span>
                            <input type="text" className="input-form"/>
                        </div>
                        <div className="inputs">
                            <span className="input-texto"> Foto del Vehiculo : </span>
                            <input type="file" name="" id="file"/>
                            <label for="file">
                                <div class="centrar">
                                    <img src={upload} alt=""/>
                                     <h6>solo archivos jpg, png</h6>
                                    </div>
                            </label>
                        </div>
                        <button className="boton-registrar">REGISTRAR</button>
                    </form>
                </div>
                <div className="Boton-volver">
                    <img src={back} alt="iconoVorlver" className="iconoVolver"/>
                    <h2 className="Volver">Volver</h2>
                </div>

            </div>
    );
}

export default Formulario