import '../assets/styles/Formulario.css'
import car from '../assets/imgs/car.svg'
import {useState} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


function FormVehicleRegistre() {
    const [year, setYear] =useState('');
    const [model, setModel] =useState('');
    const [brand, setBrand] =useState('');
    const [color, setColor] =useState('');
    const [price, setPrice] =useState('');
    const [mileage, setMileage] =useState('');
    const [fuelType, setFuelType] =useState('');
    const [serialNumber, setSerialNumber] =useState('');
    const [plate, setPlate] =useState('');
var id;

    const submitHandler=(e)=>{
        e.preventDefault();

        const option ={
            method: 'POST',
            headers:{
                'Accept': '*/*',
                'Content-Type': 'application/json',
                'Connection': 'keep-alive'
            },
            // the body it's the most changable
            body: JSON.stringify({
                id,
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
        
        fetch('http://54.172.101.164:8080/vehicle', option)
            .then(response=>response.json())
            .then(data=> data.status ? alert('nice'):alert('Registro exitoso'))
            .catch(err=>console.log('err'))
    }

    const hYear=(event)=>setYear(event.target.value)
    const hCmodel=(e)=>setModel(e.target.value)
    const hBrand=(e)=>setBrand(e.target.value)
    const hColor=(e)=>setColor(e.target.value)
    const hPrice=(e)=>setPrice(e.target.value)
    const hCml=(e)=>setMileage(e.target.value)
    const hCft=(e)=>setFuelType(e.target.value)
    const hCsn=(e)=>setSerialNumber(e.target.value)
    const hPlate=(e)=>setPlate(e.target.value)


    return (
        <>
            <Header></Header>
        <div className="container-registroVehicular">
            <div className="encabezado-registroVehicular">
                <img src={car} alt="iconoLupa" className="iconoCar"/>
                <h1 className="titulo">Registro Vehicular</h1>
            </div>

            <div className="formulario-registroVehicular">

                <form className="form-registroVehicular" onSubmit={submitHandler}>

                    <div className="inputs">
                        <span className="input-texto"> Año del Vehiculo: </span>
                        <input type="text" className="input-form" onChange={hYear}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Color del Vehiculo: </span>
                        <input type="text" className="input-form" onChange={hColor}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Valor del Vehiculo(PESO MEXINCANO $): </span>
                        <input type="text" className="input-form" onChange={hPrice}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Kilometraje del Vehiculo : </span>
                        <input type="text" className="input-form" onChange={hCml}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Marca del Vehiculo : </span>
                        <input type="text" className="input-form" onChange={hBrand}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Modelo del Vehiculo : </span>
                        <input type="text" className="input-form" onChange={hCmodel}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Tipo de Combustible del Vehiculo : </span>
                        <input type="text" className="input-form" onChange={hCft}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Numero de Serie del Vehiculo : </span>
                        <input type="text" className="input-form" onChange={hCsn}/>
                    </div>
                    <div className="inputs">
                        <span className="input-texto"> Placa del Vehiculo(mayusculas sin espacios o guiones): </span>
                        <input type="text" className="input-form" onChange={hPlate}/>
                    </div>

                    <button className="boton-registrar">REGISTRAR</button>
                </form>
            </div>


        </div>
            <Footer></Footer>
        </>
    );
}

export default FormVehicleRegistre