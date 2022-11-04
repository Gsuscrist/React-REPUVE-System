import '../assets/style/Header.css'
import Gobierno from '../assets/img/Gobierno.png'
import Perfil from "../assets/img/Perfil.png"

function Header() {
    return (
        <div className="headers">
            <img className='logoGobierno' src={Gobierno}/>
            <div className='opc'> 
                <ul>
                    <li><a className="tramite" href="">Tramite</a></li>
                    <li><a className="registro" href="">Registro</a></li>
                </ul> 
            </div> 
            <img className='logoPerfil' src={Perfil}/>
        </div>
    );
}
export default Header;

