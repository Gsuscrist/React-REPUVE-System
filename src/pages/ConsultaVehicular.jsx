import lupa from '../assets/imgs/lupa.png';
import '../assets/styles/consultaVehicular.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import VehicleCard from "../components/VehicleCard.jsx";

import {useState} from "react";

function Index() {

    const[ plate, setPlate] = useState('');
    const [data, setData]=useState(null);

    const handleChangePlate = (e) => {setPlate(e.target.value)};


    const viewCar = (data) => {

        console.log(data);
        if ( data.data.length == 0 ) {
            alert("Matricula no registrada!")

        }else {
            setData(data.data)
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        const option={
            method: 'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // the body it's the most changable
            body: JSON.stringify({
                plate:plate
            })
        }
        
        console.log(`54.235.0.149:8080/vehicle/byplate/${plate}`);
        fetch(`http://54.172.101.164:8080/vehicle/byplate/${plate}`)
            .then( response => response.json())
            .then( data => viewCar(data))
            .catch( error => console.log(error))

        }




    return (  
        <>
            <Header></Header>

            <div className="container-consultaVehicular">
                <div className="encabezado-consultaVehicular">
                    <img src={lupa} alt="iconoLupa" className="iconoLupa"/>
                    <h1 className="titulo">Consulta Vehicular</h1>
                </div>
                <hr className="separacion"/>

                <div className="formulario-consultaVehicular">

                    <form className="form-consultaVehicular" onSubmit={handleSubmit}>
                        <div className="inputs">
                            <span className="input-texto"> Numero de Placa (sin guiones o espacios) : </span>
                            <input type="text" className="input-form" onChange={handleChangePlate}/>
                        </div>
                        <button className="boton-entrar">BUSCAR</button>
                    </form>
                </div>
                <div className="articulo">
                    <span className="a_6">Este servicio de consulta es GRATUITO de acuerdo con el Artículo 6 de la Ley del Registro Público Vehicular.</span>
                </div>
                <br/>

                {

                    data && data?.map(vehicle=>
                    <VehicleCard
                        key={vehicle.id}
                        brand={vehicle.brand}
                        color={vehicle.color}
                        fuelType={vehicle.fuelType}
                        mileage={vehicle.mileage}
                        model={vehicle.model}
                        plate={vehicle.plate}
                        year={vehicle.year}
                        />
                )}
</div>

            <Footer></Footer>


        </>
    );
}

export default Index;