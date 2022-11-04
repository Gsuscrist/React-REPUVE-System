import { useState } from 'react';
import '../assets/styles/singOut.css';
import Header from './Header'; 
import Footer from './Footer';

function SingOut() {
    
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
 
         //manejador de evento, donde esta el value
    const handleChangeUsername= (event)=> setUsername(event.target.value)
    const handleChangePassword= (event)=> setPassword(event.target.value)

    const comprobar =(data)=> {
         Usuario=data.getUsuario()
         console.log(Usuario)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log('QUE SE HACE')

                fetch('http://localhost:8080/user/')
                .then (response => response.json())
                .then (data => comprobar(data))
                .catch(err => console.log(err))

    } 
    
    return (
     <>
     <Header />
        <form className="iniciosesion" onSubmit={handleSubmit}>
            <div className="container_login">
                <h1>Iniciar Sesión</h1>
                    <label htmlFor="username">Usuario</label><br />
                    <input type="text" id="username" value={username} onChange={handleChangeUsername} /><br />
                    
                    <label htmlFor="password">Contraseña</label><br />
                    <input type="password" id="password" value={password}  onChange={handleChangePassword}/>
                
                <div>
                    <button type="submit" onClick={()=>(console.log("hola"))}><a  href="/Home" className='inicio'>Inicio</a></button>
                </div>
                <div >
                    <a href="/registrase" className='registrarInicio'>Registarme aqui</a>
                </div>
            </div>
        </form>
        <Footer/>
       </>
      );
}
export default SingOut;

