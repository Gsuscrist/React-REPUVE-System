import '../assets/styles/Formulario.css'
import car from '../assets/imgs/car.svg'
import Advertencia from "./Advertencia.jsx";
import '../assets/styles/upload.css'
import upload from '../assets/imgs/upload.png'
import back from '../assets/imgs/back.svg'
import {useState} from "react";

function FormVehicleRegistre() {
    const [year,setYear] =useState('');
    const [model,setModel] =useState('');
    const [brand,setBrand] =useState('');
    const [color,setColor] =useState('');
    const [price,setPrice] =useState('');
    const [mileage,setMileage] =useState('');
    const [fuelType,setFuelType] =useState('');
    const [serialNumber,setSerialNumber] =useState('');
    const [plate,setPlate] =useState('');


    const submitHandler=(e)=>{
        e.preventDefault();

        const option ={
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // the body it's the most changable
            body: JSON.stringify({
                year: year,
                model: model,
                brand: brand,
                color: color,
                price: price,
                mileage: mileage,
                fuelType: fuelType,
                serialNumber: serialNumber,
                plate: plate
            })
        }

        fetch('http://192.168.0.10/user')
            .then(response=>response.json())
            .then(data=> data.status ? alert('fuck u'):alert('no fuck'))
            .catch(err=>console.log('err'))
    }

    faltan handlers on change

    return (

        <div className="container-registroVehicular">
            <div className="encabezado-registroVehicular">
                <img src={car} alt="iconoLupa" className="iconoCar"/>
                <h1 className="titulo">Registro Vehicular</h1>
            </div>
            <Advertencia/>
            <div className="formulario-registroVehicular">

                <form className="form-registroVehicular" onSubmit={submitHandler}>
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

export default FormVehicleRegistre