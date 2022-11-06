import { useState } from 'react';
import '../assets/style/SingOut.css';
 
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
        <form className="container" onSubmit={handleSubmit}>
            <div className="container_login">
                <h1>Iniciar Sesión</h1>
                
                    <label htmlFor="username">Usuario</label><br />
                    <input type="text" id="username" value={username} onChange={handleChangeUsername} /><br />
                    
                    <label htmlFor="password">Contraseña</label><br />
                    <input type="password" id="password" value={password}  onChange={handleChangePassword}/>
                
                <div>

                    <button type="submit" onClick={()=>(console.log("hola"))}>Iniciar</button>
                </div>
                <div className='registrar'>
                    <a href="">Registarme aqui</a>
                </div>
            </div>
        </form>
        
       </>
      );
}
export default SingOut;

