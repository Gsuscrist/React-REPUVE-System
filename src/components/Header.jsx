import '../assets/styles/Header.css'
import Gobierno from '../assets/imgs/GobiernoDeMexico.png'
import Perfil from "../assets/imgs/PerfilBlanco.png"


function Header() {
    return (
        <div className="header">
            <img className='logoGobierno' src={Gobierno}/>
            <div className='opc'> 
                <ul>
                    <li><a className="tramite" href="#registroVehi">Tramite</a></li>
                    <li><a className="registro" href="#registro">Registro</a></li>
                </ul> 
            </div> 
            <img className='logoPerfil' src={Perfil}/>
        </div>
    );
}
export default Header;

