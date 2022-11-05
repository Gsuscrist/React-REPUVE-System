import Header from '../components/Header';
import Advertencia from '../components/Advertencia';
import Footer from '../components/Footer';

import lupa from '../assets/imgs/lupa.png';
import flecha from '../assets/imgs/Flecha.png';

import '../assets/Styles/consultaVehicular.css';

function Index() {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const consulta = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        fetch('',consulta) //se supone que ahi va de donde se va tomar la API
        .then(response => response.json())
        .then(data => data.status ? alert('Busqueda Exitosa') : 
            alert('Ha ocurrido un error'))
        .catch(err => console.log(err + 'no papi no agarra'))
    };

    return (  
        <>
            <Header/>
            <div className="container-consultaVehicular">
                <div className="encabezado-consultaVehicular">
                    <img src={lupa} alt="iconoLupa" className="iconoLupa"/>
                    <h1 className="titulo">Consulta Vehicular</h1>
                </div>
                <hr className="separacion"/>
                <Advertencia/>
                <div className="formulario-consultaVehicular">
                    <form className="form-consultaVehicular">
                        <div className="inputs">
                            <span className="input-texto"> Numero de Placa (sin guiones o espacios) : </span>
                            <input type="text" className="input-form" />
                        </div>
                        <div className="inputs">
                            <span className="input-texto"> Numero de matricula (sin guiones o espacios) : </span>
                            <input type="text" className="input-form"/>
                        </div>
                        <button className="boton-entrar">BUSCAR</button>
                    </form>
                </div>
                <div className="articulo">
                    <span className="a_6">Este servicio de consulta es GRATUITO de acuerdo con el Artículo 6 de la Ley del Registro Público Vehicular.</span>
                </div>
                <div className="volver">
                    <button className="boton-volver" type="buttom">                   
                        <img src={flecha} alt="iconVolver" className="iconoVolver" />
                        <span className="Volver">Volver</span>
                    </button>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;