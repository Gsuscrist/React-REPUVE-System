import { useState } from 'react';
import '../assets/style/singOut.css';
 
function SingOut() {


    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
 
         //manejador de evento, donde esta el value
    const handleChangeUsername= (event)=> setUsername(event.target.value)
    const handleChangePassword= (event)=> setPassword(event.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
       

        console.log('QUE SE HACE')
            useEffect(function(){
                fetch('http://localhost:8080')
                .then (response => response.json())
                .then (data => setData(data))
                .catch(err => console.log(err))
        },[])

    } 
    
    return (
     
        <form className="container" onSubmit={handleSubmit}>
            <div className="container_login">
                <h1>Iniciar Sesión</h1>
                
                    <label htmlFor="username">Usuario</label><br />
                    <input type="text" id="username" value={username} onChange={handleChangeUsername} /><br />
                    
                    <label htmlFor="password">Contraseña</label><br />
                    <input type="password" id="password" value={password}  onChange={handleChangePassword}/>
                
                <div>
                    <button onClick={()=>(console.log("hola"))}>Iniciar</button>
                </div>
                <div className='registrar'>
                <a href="">Registarme aqui</a>
                </div>
            </div>
        </form>
       
      );
}
export default SingOut;

