import '../assets/styles/Form.css'
import Mensaje from "./Mensaje.jsx";
import user from '../assets/imgs/user.png'
import back from '../assets/imgs/back.png'

function Form(){
    return(

        <div id="registro" className="container-registroUsuario">
            <div className="registroUsuario">
                <img src={user} alt="iconLupa" className="iconUser"/>
                <h1 className="titulo">Registro de Usuarios</h1>
            </div>
            <Mensaje/>
            <div className="form-registroUsuario">
                <form className="form-registroUsuario">
                    <div className="inputs">
                        <span className="input-texto"> Nombre </span>
                        <input type="text" className="input-form"/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Apellido Paterno </span>
                        <input type="text" className="input-form"/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Apellido Materno </span>
                        <input type="text" className="input-form"/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Correo Electrónico </span>
                        <input type="text" className="input-form"/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Contraseña </span>
                        <input type="text" className="input-form"/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Nivel de Permisos </span>
                        <select className="select-permisos">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button className="button-registrar">REGISTRAR</button>
                </form>
            </div>
            <div className="button-volver">
                <img src={back} alt="iconVolver" className="iconVolver"/>
                <h2 className="Volver">Volver</h2>
            </div>

        </div>
    );
}

export default Form