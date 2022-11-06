import Header from '../components/Header';
//import Advertencia from '../components/Advertencia';
import Advertencia from "../components/Advertencia"
import Footer from '../components/Footer';

import lupa from '../assets/imgs/lupa.png';
import flecha from '../assets/imgs/Flecha.png';

import '../assets/styles/consultaVehicular.css';
import { useState } from 'react';

import CarView from "../components/CarView"

function Index() {

    const[ id, setId] = useState('');

    const handleChangeId = (e) => {setId(e.target.value)}

    function showCar (data) {
        if (!data.success){
            alert("matricula no registrada")
        } else {
        console.log(data.data)
        
        
    }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const url = `http://54.175.145.36:8080/vehicle/${id}`;
        console.log(url);
        fetch(url)
            .then( response => response.json() )
            .then( data => showCar(data) )
            .catch( error => console.log(error) )
            
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
                    <form className="form-consultaVehicular" onSubmit={handleSubmit}>
                        <div className="inputs">
                            <span className="input-texto"> Numero de Placa (sin guiones o espacios) : </span>
                            <input type="text" className="input-form" onChange={handleChangeId}/>
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
                <div id='resultado'></div>
            </div>
            <Footer/>
        </>
    );
}

export default Index;