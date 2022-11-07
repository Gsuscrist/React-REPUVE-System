
import '../assets/styles/Header.css'
import GobPic from '../assets/imgs/GobiernoDeMexico.png'

function Header() {
    return (
        <div className="header">
            <div className="imageGM">
                <img src={GobPic} alt="logo" className="logoTipo" />
            </div>
            <div className="opciones">
                <a href="/consultaVehi" className="opcion">/ Consulta</a>
                <a href="/RegistroVehi" className="opcion">/ Agregar Vehiculo</a>
            </div>
        </div>
    );
}
export default Header;