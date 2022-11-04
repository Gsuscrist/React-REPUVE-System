import Gobierno from '../assets/img/Gobierno.png'
import facebook from "../assets/img/facebook.png"
import twitter from "../assets/img/twitter.png"
import '../assets/style/Footer.css'


function Footer() {
    return (
        <div className="footer">
            <div className='colum'>
                <div  className='columnas'>
                    <img src={Gobierno} className="lopoGobierno" />
                </div>
                <div className='columnas'>
                    <h2>Enlaces</h2>
                    <p>Datos</p>
                    <p>Publicaciones</p>
                    <p>Transparencias</p>
                    <p>PNT</p>
                    <p>INAI</p>
                    <p>Alerta</p>
                    <p>Denuncia</p>
                </div>
                <div  className='columnas'>
                    <h2>¿Que es gob.mx?</h2>
                    <p>Es el Portal Únio de Tramites, <br />
                        Informacion y 
                        Participacion Ciudadana.</p>
                    <p>Temas</p>
                    <p>Declaracion de Acessibilidad</p>
                    <p>Aviso de Privacidad</p>
                    <p>Aviso de Privacidad Simplificado</p>
                    <p>Terminos y Condiciones</p>
                    <p>Politias de seguridad</p>
                    <p>Marco Juridico</p>
                    <p>Mapa de sitio</p>

                </div>
                <div  className='columnas'>
                    <h2>Siguenos en</h2>
                    <div className='siguenos'>
                        <img src={facebook} />
                        <img src={twitter} />
                    </div>
                    
                </div>
            </div>
        </div>
      );
}

export default Footer;