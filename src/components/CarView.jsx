import car from "../assets/imgs/car.jpg";
import "../assets/styles/VehicleView.css";
/*
{
    "id": 1,
    "year": 2017,
    "price": 1500000.0,
    "mileage": 5000.0,
    "color": "gray",
    "model": "figo",
    "brand": {
        "name": "ford"
    }
    //  serialn
}
*/

function CarView({
  year,
  price,
  mileage,
  color,
  model,
  brand,
  fuelType,
  plate,
  serialNumber,
}) {
  console.log("hola");

  return (
    <>
      <div className={"vehicleview"}>
        <input className={"vehicleData"} value={"Car model"} disabled={true} />
        <img className={"vehiclePic"} src={car} alt={"car picture"} />
        <div className={"information"}>
          <div className={"infoBox"}>
            <label> brand:</label>
            <input
              readOnly={true}
              id={"brandInfo"}
              value={brand}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> Serial Number: </label>
            <input
              readOnly={true}
              id={"serialNumber"}
              value={serialNumber}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> fuelType:</label>
            <input
              readOnly={true}
              id={"fuelTypeInfo"}
              value={fuelType}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> plate:</label>
            <input
              readOnly={true}
              id={"plateInfo"}
              value={plate}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> model:</label>
            <input
              readOnly={true}
              id={"modelInfo"}
              value={model}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> year:</label>
            <input
              readOnly={true}
              id={"yearInfo"}
              value={year}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> color:</label>
            <input
              readOnly={true}
              id={"colorInfo"}
              value={color}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> Mileage:</label>
            <input
              readOnly={true}
              id={"milageInfo"}
              value={mileage}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> Owner:</label>
            <input
              readOnly={true}
              id={"ownerInfo"}
              value={"null"}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
          <br />
          <div className={"infoBox"}>
            <label> price:</label>
            <input
              readOnly={true}
              id={"priceInfo"}
              value={price}
              className={"infoV"}
              disabled={true}
            ></input>
          </div>
        </div>
      </div>
      <button className="button-28" role="button">
        {" "}
        Volver{" "}
      </button>
    </>
  );
}
export default CarView;
