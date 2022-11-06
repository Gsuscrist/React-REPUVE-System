//LO MISMO MAMPOS, ENCONTRE DOS HEADERS
import '../assets/styles/header.css'
import '../assets/styles/Header.css'

import GobiernoMexico from '../assets/imgs/GobiernoDeMexico.png'
import Perfil from '../assets/imgs/PerfilBlanco.png'

function Header() {
    return (
        <div className="header">
            <div className="imageGM">
                <img src={GobiernoMexico} alt="logo" className="logoTipo" />
            </div>
            <div className="opciones">
                <a href="" className="opcion">Opcion 1</a>
                <a href="" className="opcion">Opcion 2</a>
            </div>
            <div className="perfil">
                <img src={Perfil} alt="IconPerfil" className='IconPerfil' />
            </div>
        </div>
    );
}

export default Header;