import '../assets/styles/Header.css'
import Gobierno from '../assets/imgs/GobiernoDeMexico.png'
import Perfil from "../assets/imgs/PerfilBlanco.png"


function Header() {
    return (
        <div className="header">
            <img className='logoGobierno' src={Gobierno}/>
            <div className='opc'> 
                <ul>
                    <li><a className="elegir" href="/consultaVehi">Tramite</a></li>
                    <li><a className="elegir" href="/registrarse">Registro</a></li>
                </ul> 
            </div> 
            <a href="/SingOut"><img className='logoPerfil' src={Perfil}/></a>
           
        </div>
    );
}
export default Header;

