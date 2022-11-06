import { useState} from 'react';
import '../assets/styles/singOut.css';
import Header from './Header'; 
import Footer from './Footer';

function SingOut() {
    const url = 'http://44.201.115.90';

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleChangeUsername= (event)=> setUsername(event.target.value)
    const handleChangePassword= (event)=> setPassword(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(url+'/user/usernameValidate/'+ username)
        fetch(url+'/password/passwordValidate/'+password)
        .then (response=>response.json())
        .then (data=> data.status ? alert('INICIO DE SESION CORRECTO') : 'CUENTA INEXISTENTE')
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
                <button type="submit" >Inicio</button>
                    {/* <button type="submit" onClick={()=>(console.log("hola"))}><a  href="/Home" className='inicio'>Inicio</a></button> */}
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