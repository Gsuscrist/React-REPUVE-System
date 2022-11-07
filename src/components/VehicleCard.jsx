import '../assets/styles/VehicleCard.css'

function VehicleCard({brand, color, fuelType, mileage,model, plate, year}){
    return(
        <div className={"vehicleCard"}>
            <span>marca: {brand}</span>
            <span>color: {color}</span>
            <span>Tipo de Combustible: {fuelType}</span>
            <span>Kilometraje: {mileage}</span>
            <span>Modelo: {model}</span>
            <span>Placas: {plate}</span>
            <span>Año: {year}</span>
        </div>
    )
}export default VehicleCard;