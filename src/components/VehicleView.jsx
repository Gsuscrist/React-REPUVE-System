import car from '../assets/imgs/car.jpg'
import '../assets/styles/VehicleView.css'


//CHEQUEN BIEN ESTE COMPONENTE, A LA HORA DE HACER MERGE CON "Kristel/avance #9 me marco algunos errores"

function VehicleView(){

    return (
        <>
            <div className={"vehicleview"}>
                <input className={"vehicleData"} value={"Car model"} disabled={true}/>
        <img className={"vehiclePic"} src={car} alt={"car picture"}/>
                <div className={"information"}>
                    <div className={"infoBox"}>
                        <label> brand:</label>
                        <input readOnly={true} id={"brandInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                    <br/>
                    <div className={"infoBox"}>
                        <label> model:</label>
                        <input  readOnly={true} id={"modelInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                    <br/>
                    <div className={"infoBox"}>
                        <label> year:</label>
                        <input readOnly={true}  id={"yearInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                    <br/>
                    <div className={"infoBox"}>
                        <label> color:</label>
                        <input readOnly={true}  id={"colorInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                    <br/>
                    <div className={"infoBox"}>
                        <label> fuel:</label>
                        <input readOnly={true}  id={"fuelInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                    <br/>
                    <div className={"infoBox"}>
                        <label> plate:</label>
                        <input readOnly={true}  id={"plateInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                    <br/>
                    <div className={"infoBox"}>
                        <label> status:</label>
                        <input readOnly={true}  id={"statusInfo"} value={"null"} className={"infoV"} disabled={true}></input>
                    </div>
                </div>
            </div>
            <button className="button-28" role="button"> Volver </button>


        </>
    );
}
export default VehicleView;